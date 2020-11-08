import React, { createContext, useContext } from 'react'
import { CurrencyProvider } from './context/CurrencyContext'

import {
  View,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native'
import CurrencyDropdown from './components/CurrencyDropdown'
import Header from './components/Header'
import ExchangeRate from './components/ExchangeRate'
import CurrencyFilters from './components/CurrencyFilters'
import InsertAmount from './components/InsertAmount'

export default function App() {
  return (
    <CurrencyProvider>
      <View style={{ flex: 1 }}>
        <KeyboardAvoidingView
          behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
          style={{ paddingHorizontal: 6, flex: 1 }}
          keyboardVerticalOffset={Platform.select({ ios: 0, android: -500 })}
        >
          <SafeAreaView style={{ flex: 1 }}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <View>
                <Header />
                <InsertAmount />
                <CurrencyDropdown type='from' />
                <CurrencyFilters type='from' />
                <CurrencyDropdown type='to' />
                <CurrencyFilters type='to' />
                <ExchangeRate />
              </View>
            </TouchableWithoutFeedback>
          </SafeAreaView>
        </KeyboardAvoidingView>
      </View>
    </CurrencyProvider>
  )
}
