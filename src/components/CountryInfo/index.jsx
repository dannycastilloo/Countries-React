import { useContext } from 'react'
import { CountryContext } from '../../context'
import './index.css'

export const CountryInfo = ({ name, continent, capital, currency, native, phone }) => {
  const { selectedCountry } = useContext(CountryContext);

  const firstStateName = selectedCountry && selectedCountry.states && selectedCountry.states.length > 0 ? selectedCountry.states[0].name : 'N/A';

  return (
    <div>
      <div className='country-info'>
        <h3>{name}</h3>
        <span>{continent}</span>
      </div>
      <div className='country-info'>
        <h3>Capital</h3>
        <span>{capital}</span>
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
