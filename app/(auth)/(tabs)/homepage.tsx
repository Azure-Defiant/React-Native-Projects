import { StyleSheet, Text, View, Image} from 'react-native'
import React from 'react'
import ScreenWrapper from '@/components/ScreenWrapper'
import { StatusBar } from 'expo-status-bar'
import { hp } from '@/helpers/common'
import { wp } from '@/helpers/common'



const HomePage = () => {
  return (
    <ScreenWrapper>
        <StatusBar style='dark'/>
    <View>
      <Text style={styles.container}>

        This is the home page
        
      </Text>

      
    </View>

    </ScreenWrapper>
  )
}

export default HomePage

const styles = StyleSheet.create({
  container:{
   height: hp(2),
   width: wp(9)
  },
  post:{
    height: hp(2),
    width: wp(9),
    borderRadius: 10,
    backgroundColor: 'white',
    position: 'relative',
  },
  header:{
    marginTop: hp(2),
    flexDirection: 'row',

  },

})
  
