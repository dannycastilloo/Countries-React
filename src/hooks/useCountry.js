/*import { useQuery, gql } from '@apollo/client';

const GET_COUNTRIES = gql`
    query getCountries {
        countries {
            name
            capital
            continent{name}
            languages{name}
            currency
            native
            phone
            states{name}
        }
    }
`

export default function useCountry() {
    const { loading, error, data } = useQuery(GET_COUNTRIES);

    return {
        loading,
        error,
        data,
    }
}
*/

// En useCountry.js
import { useQuery, gql } from '@apollo/client';
import { useState, useEffect } from 'react';
import axios from 'axios';

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

const useCountry = () => {
  const { loading, error, data } = useQuery(GET_COUNTRIES);
  const [countryImages, setCountryImages] = useState([]);

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
          return [responsePlace.data.hits[0], responseFlag.data.hits[0]];
        }
      } catch (error) {
        console.error(`Error fetching images for ${countryName} from Pixabay:`, error);
      }

      return [];
    };

    const fetchCountryImages = async () => {
      const countries = data ? data.countries : [];
      const imagesPromises = countries.map(async (country) => {
        const images = await fetchImages(country.name);
        return {
          countryName: country.name,
          images,
        };
      });

      const resolvedImages = await Promise.all(imagesPromises);
      setCountryImages(resolvedImages);
    };

    fetchCountryImages();
  }, [data]);
  
  return {
    loading,
    error,
    data,
    countryImages,
  };
};

export default useCountry