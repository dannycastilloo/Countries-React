import { createContext, useState } from 'react'

export const CountryContext = createContext()

export const CountryProvider = ({ children }) => {

    const [isInfoOpen, setIsInfoOpen] = useState(false)
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [isContinentsModalOpen, setIsContinentsModalOpen] = useState(false)
    const [selectedContinent, setSelectedContinent] = useState(null);
    const [countryImages, setCountryImages] = useState([]);

    const openInfo = () => setIsInfoOpen(true)
    const closeInfo = () => setIsInfoOpen(false)

    const openContinentsModal = () => setIsContinentsModalOpen(true)
    const closeContinentsModal = () => setIsContinentsModalOpen(false)

    const setCountry = (countryData) => {
        setSelectedCountry(countryData)
        openInfo()
    }

    const setImages = (images) => {
        setCountryImages(images);
    };

    const contextValue = {
        isInfoOpen,
        openInfo,
        closeInfo,
        selectedCountry,
        setCountry,
        isContinentsModalOpen,
        openContinentsModal,
        closeContinentsModal,
        selectedContinent,
        setSelectedContinent,
        countryImages,
        setImages
    }

    return (
        <CountryContext.Provider value={contextValue}>
            {children}
        </CountryContext.Provider>
    )
}