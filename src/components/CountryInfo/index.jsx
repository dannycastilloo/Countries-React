import { useContext } from 'react'
import { CountryContext } from '../../context'
import './index.css'

export const CountryInfo = ({ name, continent, capital, currency, native, phone, placeImage, flagImage }) => {
  const { selectedCountry } = useContext(CountryContext);

  const firstLanguageName = selectedCountry && selectedCountry.languages && selectedCountry.languages.length > 0 ? selectedCountry.languages[0].name : 'N/A';

  const firstStateName = selectedCountry && selectedCountry.states && selectedCountry.states.length > 0 ? selectedCountry.states[0].name : 'N/A';

  return (
    <div>
      <img
        className='selected-country-img'
        src={placeImage}
        alt={name} />
      <article className='country-presentation'>
        <img src={flagImage} alt={name} />
        <div className='country-presentation-data'>
          <h3>{name}</h3>
          <span>{continent}</span>
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
      <div className='country-info'>
        <h3>Native</h3>
        <span>{native}</span>
      </div>
      <div className='country-info'>
        <h3>Phone</h3>
        <span>{phone}</span>
      </div>
      <div className='country-info'>
        <h3>States</h3>
        <span>{firstStateName}</span>
      </div>
    </div>
  );
}
