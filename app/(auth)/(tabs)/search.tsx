import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '@/components/ScreenWrapper'
import { StatusBar } from 'expo-status-bar'
import SearchBar from '@/components/SearchBar'

const search = () => {
  return (
    <ScreenWrapper>
      <StatusBar style="dark"/>
        <View>
          <SearchBar onSearch={(text) => console.log(text)} />
        
  
        </View>
    </ScreenWrapper>
  )
}

export default search

const styles = StyleSheet.create({
  
})