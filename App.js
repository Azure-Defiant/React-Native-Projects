import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppLaunch from './components/AppLaunch';
import SignInView from './components/SignInView';
import SignUpView from './components/SignUpView';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="AppLaunch"
        screenOptions={{
          headerShown: false,       // Hide header if desired
          animation: 'slide_from_right', // Slide animation for screen transitions
          gestureEnabled: true,     // Enables swipe gestures
        }}
      >
        <Stack.Screen name="AppLaunch" component={AppLaunch} />
        <Stack.Screen name="SignInView" component={SignInView} />
        <Stack.Screen name="SignUpView" component={SignUpView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
