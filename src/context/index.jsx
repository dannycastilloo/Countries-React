import { createContext, useState } from 'react'

export const CountryContext = createContext()

export const CountryProvider = ({ children }) => {

    const [isInfoOpen, setIsInfoOpen] = useState(false)
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [isContinentsModalOpen, setIsContinentsModalOpen] = useState(false)

    const openInfo = () => setIsInfoOpen(true)
    const closeInfo = () => setIsInfoOpen(false)

    const openContinentsModal = () => setIsContinentsModalOpen(true)
    const closeContinentsModal = () => setIsContinentsModalOpen(false)
    
    const setCountry = (countryData) => {
        setSelectedCountry(countryData)
        openInfo()
    }

    const contextValue = {
        isInfoOpen,
        openInfo,
        closeInfo,
        selectedCountry,
        setCountry,
        isContinentsModalOpen,
        openContinentsModal,
        closeContinentsModal,
    }

    return (
        <CountryContext.Provider value={contextValue}>
            {children}
        </CountryContext.Provider>
    )
}