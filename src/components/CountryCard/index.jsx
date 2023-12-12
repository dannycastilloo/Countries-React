import './index.css'

export const CountryCard = () => {
    return (
        <article className='country-card'>
            <img src="../src/assets/united.jpg" alt="" />
            <div className='country-bottom'>
                <img src="../src/assets/flag.webp" alt="" />
                <div className='country-data'>
                    <h3>United Kingdom</h3>
                    <span>Europe</span>
                </div>
            </div>
        </article>
    )
}
