import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import { useObserver } from 'mobx-react'
import { useCurrencyStore } from '../context/CurrencyContext'
import Loading from './Loading'

const ExchangeRate = () => {
  const currencyStore = useCurrencyStore()

  useEffect(() => {
    currencyStore.getExchangeRate()
  }, [])
  return useObserver(() => (
    <View style={{ paddingTop: 80 }}>
      {!currencyStore.loading ? (
        <Text
          style={{
            fontSize: 18,
            textAlign: 'center',
            marginTop: 26,
          }}
        >{`${currencyStore.amount}${currencyStore.selectedCurrencyFrom} =  ${currencyStore.exchangeRate}${currencyStore.selectedCurrencyTo}`}</Text>
      ) : (
        <Loading />
      )}
    </View>
  ))
}

export default ExchangeRate
