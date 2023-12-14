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
    context.setCountry({ ...country, languages: country.languages });
  };

  return countryData.countries
    .filter((item) => {
      return search.toLowerCase() === ''
        ? item
        : item.name.toLowerCase().includes(search)
    })
    .map(({ name, continent, capital, languages, currency }) => {
      return (
        <article key={name} className='country-card' onClick={() => handleCardClick({ name, continent, capital, languages, currency })}>
          <img src="../src/assets/united.jpg" alt="" />
          <div className='country-bottom'>
            <img src="../src/assets/flag.webp" alt="" />
            <div className='country-data'>
              <h3>{name}</h3>
              <span>{continent.name}</span>
            </div>
          </div>
        </article>
      );
    });
};
