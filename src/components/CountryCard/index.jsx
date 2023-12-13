import useCountry from '../../hooks/useCountry';
import { SkeletonCard } from '../SkeletonCard' 
import './index.css'

export const CountryCard = () => {

    const { loading, error, data } = useCountry()

    if (loading) return <SkeletonCard />
    if (error) return <SkeletonCard />

    return data.countries.map(({ name, continent }) => (
        <article key={name} className='country-card'>
            <img src="../src/assets/united.jpg" alt="" />
            <div className='country-bottom'>
                <img src="../src/assets/flag.webp" alt="" />
                <div className='country-data'>
                    <h3>{name}</h3>
                    <span>{continent.name}</span>
                </div>
            </div>
        </article>
    ));
}