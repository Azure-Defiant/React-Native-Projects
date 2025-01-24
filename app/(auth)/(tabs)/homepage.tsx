import { StyleSheet, Text, View, Image, Dimensions, TouchableHighlight, Touchable, Pressable } from 'react-native'
import React from 'react'
import ScreenWrapper from '@/components/ScreenWrapper'
import { StatusBar } from 'expo-status-bar'
import { hp, wp } from '@/helpers/common'
import { theme } from '@/constants'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';






const HomePage = () => {
  return (
    <ScreenWrapper>
      <StatusBar style="dark"/>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>MojoGram</Text>
          <View style={styles.icon}>
            <Pressable>
              <Icon name= "heart" size={30} color={theme.colors.text} />
            </Pressable>
          </View>
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
  icon:{
    width: 30,
    height: 30,
    borderRadius: 15,
  }

});
  
