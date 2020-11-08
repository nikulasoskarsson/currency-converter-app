import React from 'react'
import { View, Text, ActivityIndicator } from 'react-native'

const Loading = () => {
  return (
    <View>
      <ActivityIndicator size='large' color='blue' />
    </View>
  )
}

export default Loading
