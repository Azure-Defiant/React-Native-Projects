import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { hp } from '@/helpers/common'
import { wp } from '@/helpers/common'
import ScreenWrapper from '@/components/ScreenWrapper'
import { StatusBar } from 'expo-status-bar'



const Profile = () => {
  return (
    <ScreenWrapper>
      <StatusBar style="dark"/>
    <View>
      <Text>Profile page </Text>
    </View>
    </ScreenWrapper>
  )
}

export default Profile

const styles = StyleSheet.create({
    container:{
        height: hp(4),
        width: wp(10),
    }
})