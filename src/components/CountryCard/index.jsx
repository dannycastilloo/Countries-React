import { ApolloClient, InMemoryCache, ApolloProvider, useQuery, gql } from '@apollo/client'
import { SkeletonCard } from '../SkeletonCard'

import './index.css'

export const CountryCard = () => {

    const GET_COUNTRIES = gql`
        query getCountries {
            countries {
            name
            capital
            code
        }
    }
    `

    const { loading, error, data } = useQuery(GET_COUNTRIES);

    if (loading) return <SkeletonCard />;
    if (error) return <p>Error : {error.message}</p>;

    return data.countries.map(({ name, capital, code }) => (

        <article key={name} className='country-card'>
            <img src="../src/assets/united.jpg" alt="" />
            <div className='country-bottom'>
                <img src="../src/assets/flag.webp" alt="" />
                <div className='country-data'>
                    <h3>{capital}</h3>
                    <span>{code}</span>
                </div>
            </div>
        </article>
    ));
}
