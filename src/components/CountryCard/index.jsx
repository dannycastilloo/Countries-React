import { useContext, useEffect, useState } from 'react';
import { CountryContext } from '../../context';
import useCountry from '../../hooks/useCountry';
import { SkeletonCard } from '../SkeletonCard';
import { useImage } from '../../hooks/useImage';

import './index.css';

export const CountryCard = ({ search }) => {
  const context = useContext(CountryContext);
  const { loading, error, data: countryData } = useCountry()
  const images = useImage()

  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    // Move the state update to the useEffect
    context.setImages(images);
    // Update local state when images are loaded
    setImagesLoaded(true);
  }, [images, context]);

  if (loading || error) return <SkeletonCard />

  const handleCardClick = (country) => {
    context.setCountry({
      ...country,
      languages: country.languages,
      states: country.states
    })
  }

  const filteredCountries = countryData.countries.filter((item) => {
    const matchesSearch = search.toLowerCase() === '' || item.name.toLowerCase().includes(search);
    const matchesContinent = !context.selectedContinent || item.continent.name === context.selectedContinent;

    return matchesSearch && matchesContinent;
  })

  return filteredCountries.map(({ name, continent, capital, languages, currency, native, phone, states }) => (
    <article
      key={name}
      className='country-card'
      onClick={() => handleCardClick({ name, continent, capital, languages, currency, native, phone, states })}>

      {context.countryImages[0] && <img src={context.countryImages[0].largeImageURL} alt="" />}
      <div className='country-bottom'>
        {context.countryImages[1] && <img src={context.countryImages[1].largeImageURL} alt="" />}
        <div className='country-data'>
          <h3>{name}</h3>
          <span>{continent.name}</span>
        </div>
      </div>
    </article>
  ))
}