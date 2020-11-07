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

export default function App() {
  return (
    <CurrencyProvider>
      <View>
        <CurrencyDropdown />
      </View>
    </CurrencyProvider>
  )
}
