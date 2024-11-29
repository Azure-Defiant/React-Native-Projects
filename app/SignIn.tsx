import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
import ScreenWrapper from '@/components/ScreenWrapper'

const SignIn = () => {
 
  const router = useRouter();

  return (
    <ScreenWrapper bg='white'>
      <Text>This is SignIn Page</Text>

      <Button title="signin" onPress={() => router.push("/_sitemap")}/>
    </ScreenWrapper>
  )
}

export default SignIn

