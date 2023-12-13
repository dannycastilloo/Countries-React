import './index.css'

export const SearchBar = () => {
  return (
    <>
    <div className='search-container'>
      <input className='search-input' type="text" placeholder='Search country...'/>
      <button className='search-button'>Search</button>
      <button className='filter-button'>
        <img src="../src/assets/filter.svg" alt="" />
      </button>
    </div>
    </>
  )
}
