import React, { ReactNode } from 'react'
import { View, ViewStyle } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

interface ScreenWrapperProps {
  children: ReactNode;
  bg?: string;
  style?: ViewStyle;
}

const ScreenWrapper: React.FC<ScreenWrapperProps> = ({ 
  children, 
  bg = '#FFFFFF', 
  style 
}) => {
  const { top } = useSafeAreaInsets();
  const paddingTop = top > 0 ? top + 5 : 30;

  return (
    <View 
      style={[
        { 
          flex: 1, 
          paddingTop, 
          backgroundColor: bg 
        }, 
        style
      ]}
    >
      {children}
    </View>
  )
}

export default ScreenWrapper