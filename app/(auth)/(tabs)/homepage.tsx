import { StyleSheet, Text, View, Image, Dimensions, TouchableHighlight, Touchable } from 'react-native'
import React from 'react'
import ScreenWrapper from '@/components/ScreenWrapper'
import { StatusBar } from 'expo-status-bar'
import { hp, wp } from '@/helpers/common'
import { theme } from '@/constants'




const HomePage = () => {
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>MojoGram</Text>

        </View>

      </View>
    </ScreenWrapper>
  )
};

export default HomePage

const styles = StyleSheet.create({
  container:{
   flex : 1,

   
  },
  header:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    marginHorizontal: wp(4),
  },
  title:{
    color: theme.colors.dark, 
    fontSize: hp(3.2),
    fontWeight: "bold",
  },

});
  
