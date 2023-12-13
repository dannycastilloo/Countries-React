import { client } from '../hooks/useClient'
import { SearchBar } from '../components/SearchBar'
import { CountryCard } from '../components/CountryCard'
import { ContinentsModal } from '../components/ContinentsModal'
import { Infobar } from '../components/Infobar'
import { ApolloProvider } from '@apollo/client'



export const HomeView = () => {

  return (
    <>
      <div className='main'>
        <h1>Welcome! 👋</h1>
        <SearchBar />
        <ContinentsModal />
        <Infobar />
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
