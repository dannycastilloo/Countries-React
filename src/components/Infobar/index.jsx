import { useContext } from 'react'
import { CountryContext } from '../../context'
import { CountryInfo } from '../CountryInfo'
import './index.css'

export const Infobar = () => {

  const context = useContext(CountryContext)

  return (
    <aside className={`
            ${context.isInfoOpen ? 'flex' : 'hidden'}
            information-bar`}>
      <button>
        <img
          src="../src/assets/x.svg"
          alt="Cerrar"
          onClick={() => context.closeInfo()} />
      </button>
      <div>
        {context.selectedCountry && context.selectedCountry.continent && (
            <CountryInfo
              name={context.selectedCountry.name || 'N/A'}
              continent={context.selectedCountry.continent.name || 'N/A'}
              capital={context.selectedCountry.capital || 'N/A'}
              language={context.selectedCountry.languages || 'N/A'}
              currency={context.selectedCountry.currency || 'N/A'}
            />
          )}
      </div>
    </aside>
  )
}
