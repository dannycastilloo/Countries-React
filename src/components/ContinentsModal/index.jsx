import { useContext } from 'react'
import { CountryContext } from '../../context'
import { Continent } from '../Continent'
import './index.css'

export const ContinentsModal = () => {

    const context = useContext(CountryContext)

    return (
        <div className={`continents-modal
             ${context.isContinentsModalOpen ? 'flex' : 'hidden'}`}>
            <button>
                <img
                    src="./x.svg"
                    alt="Cerrar"
                    onClick={() => context.closeContinentsModal()} />
            </button>
            <div
                className='continents-container'>

                <Continent
                    title='America'
                    picture='./continents/america.jpg' />
                <Continent
                    title='Europe'
                    picture='./continents/europa.jpg' />
                <Continent
                    title='Asia'
                    picture='./continents/asia.jpg' />
                <Continent
                    title='Africa'
                    picture='./continents/africa.jpg' />
                <Continent
                    title='Oceania'
                    picture='./continents/oceania.jpg' />
            </div>
        </div>

    )
}