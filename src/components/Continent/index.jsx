import { useContext } from 'react'
import { CountryContext } from '../../context'
import './index.css'

export const Continent = ({ title, picture }) => {
  const context = useContext(CountryContext)

  const handleContinentClick = () => {
    context.setSelectedContinent(title)
  }

  return (
    <div className='continent-card' onClick={handleContinentClick}>
        <img src={picture} alt={title} />
        <h3>{title}</h3>
    </div>
  )
}