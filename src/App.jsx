import { Routes, Route, Navigate } from 'react-router-dom'
import { ApolloProvider } from '@apollo/client'
import { client } from './hooks/useClient'
import { CountryProvider } from './context'
import { Sidebar } from './components/Sidebar'
import { HomeView } from './screens/HomeView'
import { DetailsView } from './screens/DetailsView'
import { DannyView } from './screens/DannyView'

import './App.css'

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <CountryProvider>
          <Sidebar />
          <Routes>
            <Route path="*" element={<Navigate to="/" />} />
            <Route path="/" element={<HomeView />} />
            <Route path="/details" element={<DetailsView />} />
            <Route path="/danny" element={<DannyView />} />
          </Routes>
        </CountryProvider>
      </ApolloProvider>
    </>
  )
}

export default App