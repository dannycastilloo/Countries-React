import { useContext, useEffect, useState } from 'react';
import { CountryContext } from '../../context';
import { SkeletonCard } from '../SkeletonCard';
import { useQuery, gql } from '@apollo/client';
import axios from 'axios'

import './index.css';

const GET_COUNTRIES = gql`
  query getCountries {
    countries {
      name
      capital
      continent { name }
      languages { name }
      currency
      native
      phone
      states { name }
    }
  }
`;

export const CountryCard = ({ search, client }) => {
  const context = useContext(CountryContext);
  const { loading, error, data } = useQuery(GET_COUNTRIES, { client });
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [selectedCountryImages, setSelectedCountryImages] = useState([]);

  useEffect(() => {
    const fetchImages = async (countryName) => {
      try {
        const apiKey = '41223762-b5c29360eff2a9446660d1f1e';
        const responsePlace = await axios.get(`https://pixabay.com/api/?key=${apiKey}&q=${countryName}&image_type=photo`);
        const responseFlag = await axios.get(`https://pixabay.com/api/?key=${apiKey}&q=${countryName}+flag&image_type=photo`);

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
        console.error(`Error fetching images for ${countryName} from Pixabay:`, error);
      }

      return {
        placeImage: null,
        flagImage: null,
      };
    };

    const fetchFlagImage = async (countryName) => {
      try {
        const response = await axios.get(`https://restcountries.com/v3.1/name/${countryName}`);
        const flagUrl = response.data[0].flags.svg;
        return { largeImageURL: flagUrl };
      } catch (error) {
        console.error(`Error fetching flag image for ${countryName}:`, error);
        return null;
      }
    };

    const fetchCountryImages = async () => {
      const countries = data ? data.countries : [];
      const imagesPromises = countries.map(async (country) => {
        const images = await fetchImages(country.name);
        return {
          countryName: country.name,
          ...country,
          images,
        };
      });

      const resolvedImages = await Promise.all(imagesPromises);
      setFilteredCountries(resolvedImages);
      setSelectedCountryImages(resolvedImages.find(country => country.name === context.selectedCountry.name)?.images || []);
    };

    fetchCountryImages();
  }, [data, search, context.selectedCountry]);

  if (loading || error) return <SkeletonCard />;

  const handleCardClick = (country) => {
    context.setCountry({
      ...country,
      languages: country.languages.map(lang => lang.name),
      states: country.states.map(state => state.name),
    });
  };

  const filteredCountriesByName = filteredCountries.filter((country) =>
    country.name.toLowerCase().includes(search.toLowerCase())
  );

  const filteredCountriesByContinent = filteredCountriesByName.filter((country) =>
    !context.selectedContinent || country.continent.name === context.selectedContinent
  );

  return filteredCountriesByContinent.map(({ countryName, images, ...countryDetails }) => (
    <article
      key={countryName}
      className='country-card'
      onClick={() => handleCardClick({ name: countryName, images, ...countryDetails })}>

      {images.placeImage && <img src={images.placeImage.largeImageURL} alt="" />}
      
      <div className='country-bottom'>
        {images.flagImage && <img src={images.flagImage.largeImageURL} className="flag-image" alt="Flag" />}
        <div className='country-data'>
        <h3>{countryName}</h3>
        <span>{countryDetails.continent.name}</span>
        </div>
        
      </div>
    </article>
  ));
};