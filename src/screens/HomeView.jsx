import { client, DisplayLocations } from '../hooks/displayLocations'

import { CountryCard } from "../components/CountryCard"
import { ApolloProvider } from '@apollo/client'

export const HomeView = () => {
  return (
    <>
      <div className='main'>
        <h1>HomeView</h1>
        <section>
          <div className="cards-container">
            <CountryCard />
            <CountryCard />
            <CountryCard />
          </div>
        </section>

        <section>
          <ApolloProvider client={client}>
            <DisplayLocations />
          </ApolloProvider>
        </section>
      </div>
    </>
  )
}
