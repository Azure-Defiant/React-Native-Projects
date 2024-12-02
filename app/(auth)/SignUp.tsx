import { StyleSheet, Text, View, Image, KeyboardAvoidingView, TextInput, TouchableOpacity, Platform, ScrollView } from 'react-native'
import React, { useState } from 'react'
import ScreenWrapper from '@/components/ScreenWrapper'
import { hp, wp } from '@/helpers/common'
import CustomButton from '@/components/Button'
import { useRouter } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'

const SignUp = () => {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword)
  }

  return (
    <ScreenWrapper>
      <ScrollView 
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <KeyboardAvoidingView 
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
          style={styles.container}
        >
          <View style={styles.innerContainer}>
            <Image 
              style={styles.logo} 
              source={require('@/assets/images/mojoGram.png')} 
            />
            <Text style={styles.title}>Hello User</Text>
            <Text style={styles.subtitle}>Sign Up to continue :)</Text>

            {/* Email */}
            <TextInput 
              style={styles.textField}
              placeholder='Email'
              placeholderTextColor="#888"
            />

            {/* Username */}
            <TextInput 
              style={styles.textField}
              placeholder='Username'
              placeholderTextColor="#888"
            />

            {/* Password */}
            <View style={styles.passwordContainer}>
              <TextInput 
                style={styles.textFieldPassword}
                placeholder='Password'
                placeholderTextColor="#888"
                secureTextEntry={!showPassword}
              />
              <TouchableOpacity 
                style={styles.eyeIcon} 
                onPress={togglePasswordVisibility}
              >
                <Ionicons 
                  name={showPassword ? "eye-off" : "eye"} 
                  size={20} 
                  color="#888" 
                />
              </TouchableOpacity>
            </View>
            <View style={styles.passwordContainer}>
              <TextInput 
                style={styles.textFieldPassword}
                placeholder='Confirm Password'
                placeholderTextColor="#888"
                secureTextEntry={!showConfirmPassword}
              />
              <TouchableOpacity 
                style={styles.eyeIcon} 
                onPress={toggleConfirmPasswordVisibility}
              >
                <Ionicons 
                  name={showConfirmPassword ? "eye-off" : "eye"} 
                  size={20} 
                  color="#888" 
                />
              </TouchableOpacity>
            </View>

             {/* Sign Up Button */}
            <View style={styles.buttonContainer}>
              <CustomButton 
                title="Sign Up" 
                onPress={() => {/* Handle Sign Up */}}
                backgroundColor="#3A3B3C"
                width={wp(70)}
                height={hp(6)}
                fontFamily="Poppins-Bold"
                fontSize={18}
              />
            </View>

           
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </ScreenWrapper>
  )
}

export default SignUp

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: wp(5),
    paddingBottom: hp(2),
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: wp(80),
    marginVertical: hp(1),
  },
  textField: {
    width: wp(80),
    height: hp(6),
    backgroundColor: '#F4F4F4',
    borderRadius: 20,
    paddingHorizontal: 20,
    fontSize: 14,
    marginVertical: hp(1),
    shadowColor: '#000',
  },
  textFieldPassword: {
    flex: 1,
    height: hp(6),
    backgroundColor: '#F4F4F4',
    borderRadius: 20,
    paddingHorizontal: 20,
    fontSize: 14,
    shadowColor: '#000',
  },
  eyeIcon: {
    position: 'absolute',
    right: 20,
    padding: 10,
  },
  logo: {
    width: wp(90),
    height: hp(20),
    resizeMode: 'cover',
    alignSelf: 'center',
  },
  title: {
    fontSize: hp(3),
    fontFamily: 'Poppins-Bold',
    alignSelf: 'center',
    marginTop: hp(2),
  },
  subtitle: {
    fontSize: hp(2),
    fontFamily: 'Poppins-Medium',
    color: 'gray',
    alignSelf: 'center',
    marginBottom: hp(2),
  },
  forgotPasswordContainer: {
    alignSelf: 'flex-end',
    marginRight: wp(10),
    marginVertical: hp(1),
  },
  forgotPassword: {
    color: '#0000FF',
    fontSize: 12,
    fontFamily: 'Poppins-Medium',
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: hp(7),
  },
  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp(2),
  },
  accountText: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#333',
  },
  signUpText: {
    fontSize: 14,
    fontFamily: 'Poppins-Bold',
    color: '#0000FF',
    marginLeft: wp(2),
  },
});