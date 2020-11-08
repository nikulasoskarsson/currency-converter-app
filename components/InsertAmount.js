import React from 'react'
import { View, Text, TextInput } from 'react-native'
import { useCurrencyStore } from '../context/CurrencyContext'
import { useObserver } from 'mobx-react'
const InsertAmount = () => {
  const currencyStore = useCurrencyStore()

  return useObserver(() => (
    <View
      style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
    >
      <Text style={{ marginRight: 6 }}>Amount</Text>
      <TextInput
        onChangeText={(text) => currencyStore.setAmount(text)}
        keyboardType='numeric'
        style={{
          borderWidth: 1,
          borderColor: '#444',
          height: 25,
          width: 40,
          textAlign: 'center',
        }}
        placeholder='insert amount'
        value={currencyStore.amount}
      />
    </View>
  ))
}

export default InsertAmount
