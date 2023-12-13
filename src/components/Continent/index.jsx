import './index.css'

export const Continent = ({ title, picture }) => {
  return (
    <div className='continent-card'>
        <img src={picture} alt={title} />
        <h3>{title}</h3>
    </div>
  )
}