import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { ScreenStackItem } from 'react-native-screens'

const _layout = () => {
  return (
    <Stack
    
    screenOptions = {{
        headerShown: false
    }}

    />
  )
}

export default _layout