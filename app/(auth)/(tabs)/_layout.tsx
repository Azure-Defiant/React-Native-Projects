import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Image } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs 
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#000',
        tabBarInactiveTintColor: '#888',
        tabBarStyle: {
          backgroundColor: '#fff',
          borderTopWidth: 1,
          borderTopColor: '#eee',
          height: 60,
          paddingBottom: 5,
          paddingTop: 5,
        },
        tabBarLabelStyle: {
          fontSize: 10,
          marginBottom: 3,
        }
      }}
    >
      <Tabs.Screen 
        name="homepage" 
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Image source={require('@/assets/icons/homeicon.png')} 
            style={{ height: 25, width: 25 }}
            />
          )
        }} 
      />
      <Tabs.Screen 
        name="search" 
        options={{
          title: 'Search',
          tabBarIcon: ({ color, size }) => (
            <Image source={require('@/assets/icons/search.png')} 
            style={{ width: 20, height: 20 }} 
            
            />
          )
        }} 
      />
      <Tabs.Screen 
        name="post" 
        options={{
          title: 'Create',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="add-circle" color={color} size={size} />
          )
        }} 
      />
      <Tabs.Screen 
        name="profile" 
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <Image source={require('@/assets/icons/homeicon.png')} 
            style={{ height: 25, width: 25 }}
            />
          )
        }} 
      />
    </Tabs>
  );
}