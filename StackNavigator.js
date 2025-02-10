import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './Screens/HomeScreen'
import ProfileScreen from './Screens/ProfileScreen'
import LandingPage from './Screens/LandingPage';
import LoginScreen from './Screens/LoginScreen';
import userAuth from './hooks/useAuth';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    const {user} = userAuth();
  return (
    <Stack.Navigator>
        {user ? (
            <>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Landing" component={LandingPage} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
  </>
    ) : (
        
    
       <Stack.Screen name="Login" component={LoginScreen} />
    )}
    </Stack.Navigator>
  )
}

export default StackNavigator;