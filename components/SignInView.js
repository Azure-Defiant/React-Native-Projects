import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather'; // Make sure you've installed react-native-vector-icons

const SignInView = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const navigation = useNavigation();

  const handleSignIn = () => {
    console.log('Signing in with:', email, password);
  };

  const handleSignUp = () => {
    navigation.navigate('SignUpView');
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
      <Text style={styles.title}>Sign In</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#888"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputWithIcon}
          placeholder="Password"
          placeholderTextColor="#888"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!isPasswordVisible} // Toggle secureTextEntry
        />
        <TouchableOpacity onPress={togglePasswordVisibility} style={styles.icon}>
          <Icon
            name={isPasswordVisible ? 'eye' : 'eye-off'}
            size={20}
            color="#888"
          />
        </TouchableOpacity>
      </View>

      <View style={styles.signUpContainer}>
        <Text style={styles.signUpText}>Don’t have an account?</Text>
        <TouchableOpacity onPress={handleSignUp}>
          <Text style={styles.signUpLink}>Sign Up</Text>
        </TouchableOpacity>
      </View>
      
      <TouchableOpacity style={styles.button} onPress={handleSignIn}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c2c2e',
    padding: 20,
  },
  logoContainer: {
    backgroundColor: '#3a3a3c',
    padding: 30,
    borderRadius: 25,
    marginBottom: 20,
    alignItems: 'center',
  },
  logo: {
    width: 300,
    height: 300,
    borderRadius: 20,
    marginTop: -200,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#FFF',
  },
  input: {
    width: '70%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 30,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  inputContainer: {
    width: '70%',
    position: 'relative',
    justifyContent: 'center',
  },
  inputWithIcon: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 30,
    paddingHorizontal: 10,
    paddingRight: 40, // Add padding for the icon
    backgroundColor: '#fff',
  },
  icon: {
    position: 'absolute',
    right: 15, // Position the icon inside the input field
    top: 15,
  },
  button: {
    width: '40%',
    height: 50,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginTop: 20,
  },
  buttonText: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  signUpContainer: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
  },
  signUpText: {
    fontSize: 13,
    color: '#ffffff',
  },
  signUpLink: {
    fontSize: 13,
    color: '#1e90ff',
    marginLeft: 5,
    textDecorationLine: 'underline',
  },
});

export default SignInView;
