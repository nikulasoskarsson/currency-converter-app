import React from 'react'
import { View, Text } from 'react-native'

const Header = () => {
  return (
    <View
      style={{
        height: 150,
        display: 'flex',

        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text style={{ fontSize: '1.4rem', color: '#444' }}>
        Currency Converted
      </Text>
      <Text style={{ fontSize: '1.2rem', color: 'pink' }}>
        Convert your currency
      </Text>
    </View>
  )
}

export default Header
