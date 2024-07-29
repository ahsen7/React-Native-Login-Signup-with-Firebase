import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { Ionicons } from '@expo/vector-icons';  
import {Bars3CenterLeftIcon, ShoppingCartIcon} from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native';

const welcome = require('../assets/welcomee.png')
const pic = require('../assets/Account-amico.png')

const Welcome = () => {
    const navigation = useNavigation();
  return (
    <SafeAreaView style={tw`flex-1 bg-gray-400`}>
        <View style={tw`flex-1 flex justify-around my-4`}>
    <Text style={[tw`text-white font-bold text-4xl text-center`, styles.txt]} >Let's Get Started</Text>

    <View style={tw`flex-row justify-center`}>
        <Image source={pic} style={{width:350, height:350 }}/>
    </View>
    <View style={tw`space-y-4`}>
    <TouchableOpacity style={tw`py-3 bg-yellow-400 mx-7 rounded-xl`} onPress={()=> navigation.navigate('Signup')}>
    <Text style={tw`text-xl font-bold text-center text-gray-700`}>Sign Up</Text>
    </TouchableOpacity>
    <View style={[tw`flex-row justify-center `, styles.txt1]}>
        <Text style={tw`text-white font-semibold`}>Already have an account?</Text>
        <TouchableOpacity onPress={()=> navigation.navigate('Login')}>
            <Text style={[tw`font-semibold text-yellow-400`, styles.txt2]}>Log In</Text>
        </TouchableOpacity>
    </View>
    </View>
        </View>
    </SafeAreaView>
  )
}

export default Welcome

const styles = StyleSheet.create({
    txt:{
       fontFamily: 'Avenir Next',
    },
    txt1:{
        marginTop: 20,
    },
    txt2:{
        fontFamily: 'Avenir Next', 
    }
})