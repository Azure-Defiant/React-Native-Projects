import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
import ScreenWrapper from '@/components/ScreenWrapper'

const SignIn = () => {
 
  const router = useRouter();

  return (
    <ScreenWrapper>
      <Text>index</Text>

      <Button title="welcome" onPress={() => router.push("/_sitemap")}/>
    </ScreenWrapper>
  )
}

export default SignIn

const styles = StyleSheet.create({})