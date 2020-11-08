import React from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { useCurrencyStore } from '../context/CurrencyContext'
import { useObserver } from 'mobx-react'
import { FontAwesome } from '@expo/vector-icons'

const CurrencyFilters = ({ type }) => {
  const currencyStore = useCurrencyStore()

  return useObserver(() => (
    <View style={{ marginBottom: 26 }}>
      <View
        style={{
          height: 40,
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderWidth: 1,
          borderColor: '#444',
          paddingHorizontal: 8,
        }}
      >
        <TextInput
          style={{
            height: '100%',
          }}
          placeholder='Search currencies'
          onChangeText={(text) =>
            type === 'from'
              ? currencyStore.setFromFilters(text)
              : currencyStore.setToFilters(text)
          }
        />
        <FontAwesome name='search' size={16} color='#444' />
      </View>
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
