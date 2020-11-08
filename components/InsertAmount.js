import React from 'react'
import { View, Text, TextInput } from 'react-native'
import { useCurrencyStore } from '../context/CurrencyContext'
import { useObserver } from 'mobx-react'
const InsertAmount = () => {
  const currencyStore = useCurrencyStore()

  return useObserver(() => (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 26,
        justifyContent: 'center',
      }}
    >
      <Text style={{ marginRight: 6, fontSize: 18 }}>Amount</Text>
      <TextInput
        onChangeText={(text) => {
          currencyStore.setAmount(text)
          currencyStore.getExchangeRate()
        }}
        keyboardType='numeric'
        style={{
          borderWidth: 1,
          borderColor: '#444',
          height: 35,
          width: 45,
          textAlign: 'center',
        }}
        value={`${currencyStore.amount}`}
        placeholder='1'
      />
    </View>
  ))
}

export default InsertAmount
