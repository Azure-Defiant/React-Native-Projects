import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '@/components/ScreenWrapper'
import { StatusBar } from 'expo-status-bar'
import { hp, wp } from '@/helpers/common'

const Post = () => {
  return (
    <ScreenWrapper>
    <StatusBar style="dark"/>

    <View>
      <Text>this is a create page</Text>
      {/* create post page dynamic datas */}
    </View>
  </ScreenWrapper>
  )
}

export default Post

const styles = StyleSheet.create({
  container:{
    height: hp(2),
  }
});