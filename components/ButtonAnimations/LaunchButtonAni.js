import React, { useRef } from 'react';
import { View, Text, TouchableWithoutFeedback, StyleSheet, Animated } from 'react-native';

const AnimatedButton = ({ onPress, title }) => {
  const scaleAnim = useRef(new Animated.Value(1)).current; // Initial scale value is 1

  // Scale and opacity animations
  const onPressIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 0.9,  // Shrink slightly
      useNativeDriver: true,
    }).start();
  };

  const onPressOut = () => {
    Animated.spring(scaleAnim, {
      toValue: 1,  // Return to original size
      useNativeDriver: true,
    }).start(() => {
      if (onPress) onPress();  // Trigger the actual button press action
    });
  };

  return (
    <TouchableWithoutFeedback onPressIn={onPressIn} onPressOut={onPressOut}>
      <Animated.View style={[styles.button, { transform: [{ scale: scaleAnim }] }]}>
        <Text style={styles.buttonText}>{title}</Text>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '60%',
    height: 50,
    backgroundColor: '#3498db',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});

const App = () => {
  const handlePress = () => {
    console.log("Button Pressed!");
  };

  return (
    <View style={styles.container}>
      <AnimatedButton title="Press Me" onPress={handlePress} />
    </View>
  );
};

const containerStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
});

export default App;
