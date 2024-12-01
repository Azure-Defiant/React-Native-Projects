import { 
  StyleSheet, 
  Text, 
  View,
  Image,
} from 'react-native';

import React, { useEffect } from 'react';
import { useRouter } from 'expo-router';
import ScreenWrapper from '@/components/ScreenWrapper';
import { wp, hp } from '@/helpers/common';
import { useFonts } from 'expo-font';
import CustomTextField from '@/components/TextField';
import { StatusBar } from "expo-status-bar";

const SignIn = () => {
  const [renderKey, setRenderKey] = React.useState(0);
  const router = useRouter();

  const [loaded] = useFonts({
    'Poppins-Regular': require('@/assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Bold': require('@/assets/fonts/Poppins-Bold.ttf'),
  });

  useEffect(() => {
    // This will create a new render key when the component mounts
    setRenderKey(prev => prev + 1);
  }, []);

  return (
    <ScreenWrapper>
      <StatusBar style="dark"/>
      <View style={styles.container}>
        <Image
          key={renderKey}  // Force re-render
          style={styles.imageContainer} 
          source={require('@/assets/images/mojoGram.png')} 
        />

        <Text style={styles.signinContainer}>
          Sign In
        </Text>

       

         <CustomTextField 
          placeholder="Email"
          style={styles.emailInput}
           />

          <CustomTextField 
            placeholder="Username"
            style={styles.usernameInput}
          />
      
        {/* Add more inputs or buttons below if necessary */}
      </View>
    </ScreenWrapper>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',     
    paddingHorizontal: 20,  
  },
  imageContainer: {
    height: hp(30),
    width: wp(100),
    alignSelf: 'center',
    marginBottom: hp(3), 
  },
  signinContainer: {
    fontFamily: 'Poppins-Regular',
    fontSize: 24,
    marginBottom: hp(20),
    textAlign: 'center', 
  },
  emailInput: {
    backgroundColor: '#F4F4F4',
    marginBottom: hp(50), 
  },
  usernameInput: {
    backgroundColor: '#F4F4F4',
    padding: 20, 
  },
});
