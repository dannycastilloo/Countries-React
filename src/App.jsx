import { Routes, Route, Navigate } from 'react-router-dom'

import { Sidebar } from './components/Sidebar'
import { HomeView } from './screens/HomeView'
import { DetailsView } from './screens/DetailsView'
import { DannyView } from './screens/DannyView'

import './App.css'

function App() {
  return (
    <>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="*" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomeView />} />
        <Route path="/details" element={<DetailsView />} />
        <Route path="/danny" element={<DannyView />} />
      </Routes>

    </>
  )
}

export default App