import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { useCurrencyStore } from '../context/CurrencyContext'
import DropDownPicker from 'react-native-dropdown-picker'
import { useObserver } from 'mobx-react'

const CurrencyDropdown = ({ type }) => {
  const [dropdownPadding, setDropdownPadding] = useState(0)
  const currencyStore = useCurrencyStore()

  return useObserver(() => (
    <View style={{ zIndex: 500 }}>
      <Text>
        {type === 'from'
          ? 'Transfer From ' + currencyStore.selectedCurrencyFrom
          : 'Transfer to ' + currencyStore.selectedCurrencyTo}
      </Text>
      <View style={{ marginBottom: dropdownPadding }}>
        <DropDownPicker
          onOpen={() => setDropdownPadding(250)}
          onClose={() => setDropdownPadding(0)}
          items={currencyStore.currencies}
          containerStyle={{ height: 40 }}
          style={{ backgroundColor: '#fafafa' }}
          itemStyle={{
            justifyContent: 'flex-start',
          }}
          dropDownStyle={{ backgroundColor: '#fafafa', height: 250 }}
          dropDownMaxHeight={250}
          searchable={true}
          onChangeItem={(item) => {
            if (type === 'from') {
              currencyStore.setSelectedCurrencyFrom(item)
              currencyStore.getExchangeRate()
            } else {
              currencyStore.setSelectedCurrencyTo(item)
              currencyStore.getExchangeRate()
            }
          }}
        />
      </View>
    </View>
  ))
}

export default CurrencyDropdown
