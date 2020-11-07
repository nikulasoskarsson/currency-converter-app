import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import { useObserver } from 'mobx-react'
import { useCurrencyStore } from '../context/CurrencyContext'

const ExchangeRate = () => {
  const currencyStore = useCurrencyStore()

  useEffect(() => {
    currencyStore.getExchangeRate()
  }, [])
  return useObserver(() => (
    <View>
      <Text>{currencyStore.exchangeRate}</Text>
    </View>
  ))
}

export default ExchangeRate
