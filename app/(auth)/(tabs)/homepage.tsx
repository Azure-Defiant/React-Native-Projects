import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '@/components/ScreenWrapper'
import { StatusBar } from 'expo-status-bar'
import { hp } from '@/helpers/common'
import { wp } from '@/helpers/common'

const homePage = () => {
  return (
    <ScreenWrapper>
        <StatusBar style='dark'/>
    <View>
      <Text>

        This is the HomePage Screen
        
      </Text>
    </View>

    </ScreenWrapper>
  )
}

export default homePage

const styles = StyleSheet.create({
  container:{
   height: hp(2),
   width: wp(9),
  }
})
  
