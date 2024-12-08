import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '@/components/ScreenWrapper'
import { StatusBar } from 'expo-status-bar'

const search = () => {
  return (
    <ScreenWrapper>
      <StatusBar style="dark"/>
        <View>
           <Text>
             this is a search page
           </Text>
        </View>
    </ScreenWrapper>
  )
}

export default search

const styles = StyleSheet.create({})