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
        {type === 'from' ? (
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
            }}
          >
            {currencyStore.fromFilteredCurrencies.map((currency) => (
              <TouchableOpacity
                key={currency}
                style={{
                  marginVertical: 3.5,
                  marginHorizontal: 1.5,
                  width: 80,
                  height: 40,
                  backgroundColor: 'blue',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Text style={{ color: '#fff' }}>{currency}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ) : (
          currencyStore.toFilteredCurrencies.map((currency) => (
            <TouchableOpacity key={currency}>
              <Text>{currency}</Text>
            </TouchableOpacity>
          ))
        )}
      </View>
    </View>
  ))
}

export default CurrencyFilters
