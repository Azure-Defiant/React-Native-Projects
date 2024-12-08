import React from 'react';
import { Stack } from 'expo-router';





const Layout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      {/* All routes within the app directory will automatically be part of this stack */}
    </Stack>
  );
};

export default Layout;
