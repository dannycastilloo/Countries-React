import { Continent } from '../Continent'
import './index.css'

export const ContinentsModal = () => {
    return (
        <div className='continents-container'>
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
    )
}