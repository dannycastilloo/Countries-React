import { useContext } from 'react'
import { CountryContext } from '../../context'
import './index.css'

export const SearchBar = () => {

  const context = useContext(CountryContext)

  return (
    <>
      <div className='search-container'>
        <input className='search-input' type="text" placeholder='Search country...' />
        <button className='search-button'>Search</button>
        <button className='filter-button' onClick={() => context.openContinentsModal()}>
          <img src="../src/assets/filter.svg" alt="" />
        </button>
      </div>
    </>
  )
}