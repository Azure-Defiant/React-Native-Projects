import React from 'react';
import { 
  View, 
  ActivityIndicator, 
  StyleSheet, 
  ViewStyle, 
  ColorValue 
} from 'react-native';

interface LoadingOverlayProps {
  isLoading: boolean;
  color?: ColorValue;
  size?: number | 'small' | 'large';
  style?: ViewStyle;
}

const LoadingOverlay: React.FC<LoadingOverlayProps> = ({
  isLoading,
  color = '#FFFFFF',
  size = 'small',
  style
}) => {
  if (!isLoading) return null;

  return (
    <View style={[styles.overlay, style]}>
      <ActivityIndicator 
        color={color}
        size={size}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)', // Semi-transparent overlay
    borderRadius: 10, // Match button border radius
    zIndex: 10
  }
});

export default LoadingOverlay;