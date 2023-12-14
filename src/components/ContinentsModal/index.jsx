import { useContext } from 'react'
import { CountryContext } from '../../context'
import { Continent } from '../Continent'
import './index.css'

export const ContinentsModal = () => {
  const context = useContext(CountryContext)

  const handleContinentSelect = (continent) => {
    context.setSelectedContinent(continent)
    context.closeContinentsModal()
  }

  return (
    <div className={`continents-modal ${context.isContinentsModalOpen ? 'flex' : 'hidden'}`}>
      <button>
        <img
          src="./extra/x.svg"
          alt="Cerrar"
          onClick={() => context.closeContinentsModal()}
        />
      </button>
      <div className='continents-container'>
        <Continent
          title='South America'
          picture='./continents/south-america.jpg'
          onClick={() => handleContinentSelect('South America')}
        />
        <Continent
          title='North America'
          picture='./continents/north-america.jpg'
          onClick={() => handleContinentSelect('North America')}
        />
        <Continent
          title='Europe'
          picture='./continents/europa.jpg'
          onClick={() => handleContinentSelect('Europe')}
        />
        <Continent
          title='Asia'
          picture='./continents/asia.jpg'
          onClick={() => handleContinentSelect('Asia')}
        />
        <Continent
          title='Africa'
          picture='./continents/africa.jpg'
          onClick={() => handleContinentSelect('Africa')}
        />
        <Continent
          title='Oceania'
          picture='./continents/oceania.jpg'
          onClick={() => handleContinentSelect('Oceania')}
        />
      </div>
    </div>
  );
};
