import React from 'react';
import { 
  TextInput, 
  TextInputProps, 
  StyleSheet, 
  View, // Import View to wrap the input
  ViewStyle 
} from 'react-native';
import { hp } from '@/helpers/common';

interface CustomTextFieldProps extends TextInputProps {
  containerStyle?: ViewStyle;
}

const CustomTextField: React.FC<CustomTextFieldProps> = ({ 
  style, 
  containerStyle,
  ...props 
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <TextInput
        style={[styles.textField, style]}
        placeholderTextColor="#888"
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Centers vertically
    alignItems: 'center', // Centers horizontally
  },
  textField: {
    width: 277,
    height: 55,
    backgroundColor: '#F4F4F4',
    borderRadius: 20,
    paddingHorizontal: 20,
    shadowColor: '#000',
    fontSize: 14,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.1)',
  }
});

export default CustomTextField;
