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
                    src="../src/assets/x.svg"
                    alt="Cerrar"
                    onClick={() => context.closeContinentsModal()} />
            </button>
            <div
                className='continents-container'>

                <Continent
                    title='America'
                    picture='../src/assets/continents/america.jpg' />
                <Continent
                    title='Europe'
                    picture='../src/assets/continents/europa.jpg' />
                <Continent
                    title='Asia'
                    picture='../src/assets/continents/asia.jpg' />
                <Continent
                    title='Africa'
                    picture='../src/assets/continents/africa.jpg' />
                <Continent
                    title='Oceania'
                    picture='../src/assets/continents/oceania.jpg' />
            </div>
        </div>

    )
}