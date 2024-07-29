import { StyleSheet } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from '../Screens/Welcome';
import Login from '../Screens/Login';
import Signup from '../Screens/Signup';
import Home from '../Screens/Home';
import useAuth from '../hooks/UseAuth'; // Ensure correct import

const Stack = createNativeStackNavigator();

const Navigations = () => {
  const { user } = useAuth(); // Use the custom hook

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={user ? "Home" : "Welcome"}>
        {user ? (
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        ) : (
          <>
            <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigations;

const styles = StyleSheet.create({});
