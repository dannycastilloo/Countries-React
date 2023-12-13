import './index.css'

export const Infobar = () => {
  return (
    <div class='information-bar'>
      <h2>X</h2>
      <img src="../src/assets/united.jpg" alt="" />
      <article>
        <img src="../src/assets/flag" alt="" />
        <div>
          <h3>United Kingdom</h3>
          <span>Europe</span>
        </div>
      </article>
      <div className='country-info'>
        <h3>Capital</h3>
        <span>London</span>
      </div>
      <div className='country-info'>
        <h3>Language</h3>
        <span>English</span>
      </div>
      <div className='country-info'>
        <h3>Population</h3>
        <span>500k people</span>
      </div>
      <div className='country-info'>
        <h3>Currency</h3>
        <span>Euro, Dollar</span>
      </div>
      <div className='country-region'>
        <h3>Region</h3>
        <div>
          <p>Santa Cruz</p>
          <p>Cordoba</p>
          <p>Jujuy</p>
        </div>
      </div>
    </div>
  )
}
