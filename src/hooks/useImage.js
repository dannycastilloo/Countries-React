import { useState, useEffect, useContext } from 'react'
import { CountryContext } from '../context';
import axios from 'axios'

export const useImage = () => {
  const [images, setImages] = useState([]);
  const context = useContext(CountryContext);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const selectedCountry = context.selectedCountry;

        if (selectedCountry) {
          const apiKey = '41223762-b5c29360eff2a9446660d1f1e';
          const responsePlace = await axios.get(`https://pixabay.com/api/?key=${apiKey}&q=${selectedCountry.name}&image_type=photo`);
          const responseFlag = await axios.get(`https://pixabay.com/api/?key=${apiKey}&q=${selectedCountry.name}+flag&image_type=photo`);

          if (responsePlace.data && responsePlace.data.hits && responsePlace.data.hits.length > 0 && responseFlag.data && responseFlag.data.hits && responseFlag.data.hits.length > 0) {
            setImages([responsePlace.data.hits[0], responseFlag.data.hits[0]]);
          }
        }
      } catch (error) {
        console.error('Error fetching images from Pixabay:', error);
      }
    };

    fetchImages();
  }, [context.selectedCountry]);

  return images;
};