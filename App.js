// Purpose: Main file for the app, where the navigation is set up and the app is run.
import Ract from "react";
import StackNavigator from './StackNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from "./hooks/useAuth";



export default function App() {
  return (
    
    <NavigationContainer>
      <AuthProvider>
         <StackNavigator/>
      </AuthProvider>
    </NavigationContainer>
  );
}
