import { useQuery, gql } from '@apollo/client';

const GET_COUNTRIES = gql`
    query getCountries {
        countries {
            name
            continent { name }
        }
    }
`

export default function useCountry() {
    const { loading, error, data } = useQuery(GET_COUNTRIES);

    return {
        loading,
        error,
        data,
    }
}