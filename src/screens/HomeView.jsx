import { client } from '../hooks/useClient'

import { CountryCard } from "../components/CountryCard"
import { ApolloProvider } from '@apollo/client'

export const HomeView = () => {

  return (
    <>
      <div className='main'>
        <h1>HomeView</h1>
        <section>
          <div className="cards-container">
            <ApolloProvider client={client}>
              <CountryCard />
              <CountryCard />
              <CountryCard />
            </ApolloProvider>
          </div>

        </section>
      </div>
    </>
  )
}
