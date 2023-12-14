import { useContext } from 'react';
import { CountryContext } from '../../context';
import useCountry from '../../hooks/useCountry';
import { SkeletonCard } from '../SkeletonCard';
import './index.css';

export const CountryCard = ({ search }) => {
  const context = useContext(CountryContext);
  const { loading, error, data: countryData } = useCountry();

  if (loading || error) return <SkeletonCard />;

  const handleCardClick = (country) => {
    context.setCountry({ ...country, languages: country.languages, states: country.states });
  };

  const filteredCountries = countryData.countries.filter((item) => {
    const matchesSearch = search.toLowerCase() === '' || item.name.toLowerCase().includes(search);
    const matchesContinent = !context.selectedContinent || item.continent.name === context.selectedContinent;

    return matchesSearch && matchesContinent;
  })

  return filteredCountries.map(({ name, continent, capital, languages, currency, native, phone, states }) => (
    <article key={name} className='country-card' onClick={() => handleCardClick({ name, continent, capital, languages, currency, native, phone, states })}>
      <img src="./united.jpg" alt="" />
      <div className='country-bottom'>
        <img src="./flag.webp" alt="" />
        <div className='country-data'>
          <h3>{name}</h3>
          <span>{continent.name}</span>
        </div>
      </div>
    </article>
  ))
}