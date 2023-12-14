import { useContext } from 'react'
import { CountryContext } from '../../context'
import './index.css'

export const SearchBar = ({ setSearch }) => {

  const context = useContext(CountryContext)

  return (
    <>
      <div className='search-container'>
        <input
          className='search-input'
          type="text"
          placeholder='Search country...'
          onChange={(e) => setSearch(e.target.value)}
          onClick={() => context.openContinentsModal()}/>
      </div>
    </>
  )
}