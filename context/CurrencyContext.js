import React, { createContext, useContext } from 'react'
import { useLocalStore } from 'mobx-react'
import { createCurrencyStore } from '../stores/currencyStore'

export const CurrencyContext = createContext()

export const CurrencyProvider = ({ children }) => {
  const currencyStore = useLocalStore(createCurrencyStore)

  return (
    <CurrencyContext.Provider value={currencyStore}>
      {children}
    </CurrencyContext.Provider>
  )
}

export const useCurrencyStore = () => useContext(CurrencyContext)
