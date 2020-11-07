import React, { createContext, useContext } from 'react'
import { CurrencyProvider } from './context/CurrencyContext'

import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  Button,
} from 'react-native'
import CurrencyDropdown from './components/CurrencyDropdown'
import Header from './components/Header'
import ExchangeRate from './components/ExchangeRate'
import CurrencyFilters from './components/CurrencyFilters'

export default function App() {
  return (
    <CurrencyProvider>
      <View>
        <Header />
        <CurrencyDropdown type='from' />
        <CurrencyFilters type='from' />
        <CurrencyDropdown type='to' />
        <CurrencyFilters type='to' />
        <ExchangeRate />
      </View>
    </CurrencyProvider>
  )
}
