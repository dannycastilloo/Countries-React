import { useContext, useEffect, useState } from 'react'
import { CountryContext } from '../../context'
import { SkeletonCard } from '../SkeletonCard'
import { useQuery, gql } from '@apollo/client'
import { useCountryImages } from '../../hooks/useCountryImages'
import './index.css'

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
  const context = useContext(CountryContext)
  const { loading, error, data } = useQuery(GET_COUNTRIES, { client })
  const countryImages = useCountryImages(data ? data.countries : [])

  const handleCardClick = (country) => {
    context.setCountry({
      ...country,
      languages: country.languages.map(lang => lang.name),
      states: country.states.map(state => state.name),
    });
  };

  const filteredCountriesByName = countryImages.filter((country) =>
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
  ))
}