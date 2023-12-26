import { useState, useEffect } from 'react';
import axios from 'axios';

export const useCountryImages = (countries) => {
  const [countryImages, setCountryImages] = useState([]);

  useEffect(() => {
    const fetchImages = async (countryName) => {
      try {
        const apiKey = '41223762-b5c29360eff2a9446660d1f1e';
        const responsePlace = await axios.get(`https://pixabay.com/api/?key=${apiKey}&q=${countryName}&image_type=photo`)
        const responseFlag = await axios.get(`https://pixabay.com/api/?key=${apiKey}&q=${countryName}+flag&image_type=photo`)

        if (
          responsePlace.data &&
          responsePlace.data.hits &&
          responsePlace.data.hits.length > 0 &&
          responseFlag.data &&
          responseFlag.data.hits &&
          responseFlag.data.hits.length > 0
        ) {
          return {
            placeImage: responsePlace.data.hits[0],
            flagImage: await fetchFlagImage(countryName),
          };
        }
      } catch (error) {
        console.error(`Error fetching images for ${countryName} from Pixabay:`, error)
      }

      return {
        placeImage: null,
        flagImage: null,
      };
    };

    const fetchFlagImage = async (countryName) => {
      try {
        const response = await axios.get(`https://restcountries.com/v3.1/name/${countryName}`)
        const flagUrl = response.data[0].flags.svg
        return { largeImageURL: flagUrl }
      } catch (error) {
        console.error(`Error fetching flag image for ${countryName}:`, error)
        return null
      }
    };

    const fetchCountryImages = async () => {
      const imagesPromises = countries.map(async (country) => {
        const images = await fetchImages(country.name)
        return {
          countryName: country.name,
          ...country,
          images,
        }
      })

      const resolvedImages = await Promise.all(imagesPromises);
      setCountryImages(resolvedImages);
    }

    fetchCountryImages();
  }, [countries]);

  return countryImages;
};