import { client } from '../hooks/useClient'
import { useState } from 'react'
import { SearchBar } from '../components/SearchBar'
import { CountryCard } from '../components/CountryCard'
import { ContinentsModal } from '../components/ContinentsModal'
import { Infobar } from '../components/Infobar'
import { ApolloProvider } from '@apollo/client'

export const HomeView = () => {

  const [search, setSearch] = useState('')

  return (
    <>
      <div className='main'>
        <h1>Welcome! 👋</h1>
        <SearchBar setSearch={setSearch} />
        <ContinentsModal />
        <Infobar />
        <section>
          <div className="cards-container">
            <ApolloProvider client={client}>
              <CountryCard search={search} />
            </ApolloProvider>
          </div>
        </section>
      </div>
    </>
  )
}