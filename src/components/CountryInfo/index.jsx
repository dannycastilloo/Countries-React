import { useContext } from 'react'
import { CountryContext } from '../../context'
import './index.css'

export const CountryInfo = ({ name, continent, capital, languages, currency }) => {
  const { selectedCountry } = useContext(CountryContext);

  const firstLanguageName = selectedCountry && selectedCountry.languages && selectedCountry.languages.length > 0 ? selectedCountry.languages[0].name : 'N/A';

  return (
    <div>
      <img className='selected-country-img' src="../src/assets/united.jpg" alt="" />
      <article>
        <img src="../src/assets/flag" alt="" />
        <div>
          <h3>{name}</h3>
          <span>{continent.name}</span>
        </div>
      </article>
      <div className='country-info'>
        <h3>Capital</h3>
        <span>{capital}</span>
      </div>
      <div className='country-info'>
        <h3>Language</h3>
        <span>{firstLanguageName}</span>
      </div>
      <div className='country-info'>
        <h3>Currency</h3>
        <span>{currency}</span>
      </div>
    </div>
  );
}