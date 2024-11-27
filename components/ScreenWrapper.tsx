import React, { ReactNode } from 'react'
import { View, ViewStyle } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

// Define an interface for the component props
interface ScreenWrapperProps {
  children: ReactNode;
  bg?: string;
}

const ScreenWrapper: React.FC<ScreenWrapperProps> = ({ children, bg = '#FFFFFF' }) => {
  const { top } = useSafeAreaInsets();
  const paddingTop = top > 0 ? top + 5 : 30;

  return (
    <View style={{
      flex: 1, 
      paddingTop, 
      backgroundColor: bg
    }}> 
      {children}
    </View>
  )
}

export default ScreenWrapper