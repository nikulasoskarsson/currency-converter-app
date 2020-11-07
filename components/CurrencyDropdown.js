import React from 'react'
import { View, Text } from 'react-native'
import { useCurrencyStore } from '../context/CurrencyContext'
import DropDownPicker from 'react-native-dropdown-picker'
import { useObserver } from 'mobx-react'

const CurrencyDropdown = () => {
  const currencyStore = useCurrencyStore()

  return useObserver(() => (
    <View>
      <Text>{currencyStore.selectedCurrencyFrom}</Text>
      <DropDownPicker
        items={currencyStore.currencies}
        containerStyle={{ height: 40 }}
        style={{ backgroundColor: '#fafafa' }}
        itemStyle={{
          justifyContent: 'flex-start',
        }}
        dropDownStyle={{ backgroundColor: '#fafafa' }}
        onChangeItem={(item) => {
          console.log(item)
          currencyStore.setSelectedCurrencyFrom(item)
        }}
      />
    </View>
  ))
}

export default CurrencyDropdown
