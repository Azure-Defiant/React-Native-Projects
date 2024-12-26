import { StyleSheet, Text, View, TouchableHighlight, Image } from 'react-native'
import React from 'react'
import { hp } from '@/helpers/common'
import { wp } from '@/helpers/common'
import ScreenWrapper from '@/components/ScreenWrapper'
import { StatusBar } from 'expo-status-bar'

const Profile = () => {
  return (
    <ScreenWrapper>
      <StatusBar style='dark'/>
      <View style={styles.container}> {/* Centering container */}
        <TouchableHighlight style={styles.post}>
          <View style={styles.headerContent}>
            <Image
              style={styles.avatar}
              source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar2.png' }}
            />
          </View> 
        </TouchableHighlight>
        <Text>bruh</Text>
      </View>
    </ScreenWrapper>
  )
}

export default Profile

const styles = StyleSheet.create({
  container:{
    flex: 1, // Fill the available space
    justifyContent: 'center', // Center vertically
    alignItems: 'center', // Center horizontally
  },
  post:{
    height: hp(2),
    width: wp(10),
    borderRadius: 10,
    backgroundColor: 'white',
    position: 'relative',
  },
  headerContent: {
    padding: 30,
    alignItems: 'center',
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: 'white',
    marginBottom: 10,
  },
});
