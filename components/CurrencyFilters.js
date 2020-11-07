import React from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { useCurrencyStore } from '../context/CurrencyContext'
import { useObserver } from 'mobx-react'

const CurrencyFilters = ({ type }) => {
  const currencyStore = useCurrencyStore()

  return useObserver(() => (
    <View>
      <TextInput
        style={{ height: 40, borderBottomWidth: 1.0, borderColor: '#444' }}
        placeholder='Search currencies'
        onChangeText={(text) =>
          type === 'from'
            ? currencyStore.setFromFilters(text)
            : currencyStore.setToFilters(text)
        }
      />
      <View>
        {type === 'from'
          ? currencyStore.fromFilteredCurrencies.map((currency) => (
              <TouchableOpacity>{currency}</TouchableOpacity>
            ))
          : currencyStore.toFilteredCurrencies.map((currency) => (
              <TouchableOpacity>{currency}</TouchableOpacity>
            ))}
      </View>
    </View>
  ))
}

export default CurrencyFilters
