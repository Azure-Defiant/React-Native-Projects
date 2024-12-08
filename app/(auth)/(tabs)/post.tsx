import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '@/components/ScreenWrapper'
import { StatusBar } from 'expo-status-bar'

const Post = () => {
  return (
    <ScreenWrapper>
    <StatusBar style="dark"/>

  <View>
    <Text>post page</Text>
  </View>
  </ScreenWrapper>
  )
}

export default Post

const styles = StyleSheet.create({})