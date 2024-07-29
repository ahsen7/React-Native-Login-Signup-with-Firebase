import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import tw from 'twrnc'
import Welcome from './Screens/Welcome';
import Login from './Screens/Login';
import Navigations from './Navigation/Navigations';

export default function App() {
  return (
   
    <Navigations/>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
