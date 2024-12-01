import React, { useState } from 'react';
import { 
  TouchableOpacity, 
  Text, 
  StyleSheet, 
  ViewStyle, 
  TextStyle, 
  Animated,

} from 'react-native';
import { useFonts } from 'expo-font';
import LoadingOverlay from '../components/Loading'; // Import the new component

interface CustomButtonProps {
  title: string;
  onPress: () => void;
  style?: Animated.WithAnimatedObject<ViewStyle>;
  textStyle?: TextStyle;
  backgroundColor?: string;
  width?: number;
  height?: number;
  fontFamily?: string;
  fontSize?: number;
  isLoading?: boolean;
  loadingColor?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  onPress,
  style,
  textStyle,
  backgroundColor = '#007BFF',
  width = 300,
  height = 50,
  fontFamily = 'Poppins-Regular',
  fontSize = 16,
  isLoading = false,
  loadingColor = '#FFFFFF'
}) => {
  // Load fonts
  const [fontsLoaded] = useFonts({
    'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
  });

  const [scaleAnimation] = useState(new Animated.Value(1));

  const handlePressIn = () => {
    if (!isLoading) {
      Animated.spring(scaleAnimation, {
        toValue: 0.95,
        useNativeDriver: true,
        bounciness: 15,
        speed: 20
      }).start();
    }
  };

  const handlePressOut = () => {
    if (!isLoading) {
      Animated.spring(scaleAnimation, {
        toValue: 1,
        useNativeDriver: true,
        bounciness: 15,
        speed: 20
      }).start();
    }
  };

  if (!fontsLoaded) {
    return null;
  }

  const animatedStyle: Animated.WithAnimatedObject<ViewStyle> = {
    transform: [{ scale: scaleAnimation }],
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation: 8,
    width,
    height,
  };

  return (
    <Animated.View style={[animatedStyle, style]}>
      <TouchableOpacity
        style={[
          styles.button, 
          { 
            backgroundColor, 
            width: '100%', 
            height: '100%' 
          }
        ]}
        onPress={onPress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        activeOpacity={0.7}
        disabled={isLoading}
      >
        {!isLoading && (
          <Text 
            style={[
              styles.buttonText, 
              { 
                fontFamily: fontFamily,
                fontSize: fontSize
              }, 
              textStyle
            ]}
          >
            {title}
          </Text>
        )}
        
        <LoadingOverlay 
          isLoading={isLoading} 
          color={loadingColor}
        />
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    paddingHorizontal: 20,
    position: 'relative',
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
  }
});

export default CustomButton;