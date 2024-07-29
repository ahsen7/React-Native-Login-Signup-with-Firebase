import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { SafeAreaView } from 'react-native-safe-area-context'
import {ArrowLeftIcon } from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native';
import { signInWithEmailAndPassword } from 'firebase/auth'

const loginimg = require('../assets/Mobile login-amico.png')
const googlelogo = require('../assets/google-logo.png')
const applelogo= require('../assets/images/apple logoo.png')
const fblogo= require('../assets/images/facebook-logo-png.png')
const Login = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = async()=>{
      if(email && password){
        try{
          await signInWithEmailAndPassword(auth, email, password);
        }catch(err){
          console.log('error', err.message)
        }
      }
    }
  return (
    <View style={tw`flex-1 bg-gray-400`}>
      <SafeAreaView style={tw`flex`}>
    <View style={tw`flex-row justify-start`}>
    <TouchableOpacity style={tw`bg-yellow-400 p-2 rounded-tr-2xl rounded-bl-2xl ml-4`} onPress={()=> navigation.goBack()}>
    <ArrowLeftIcon size="20" color="black"/>
    </TouchableOpacity>
    </View>
    <View style={tw`flex-row justify-center`}>
    <Image source={loginimg} style={{width:220, height:220}}/>
    </View>
      </SafeAreaView>
      <View style={[tw`flex-1 bg-white px-8 pt-8`, styles.box]}>
    <View style={tw`form-space-y-2`}>
    <Text style={tw`text-gray-700 ml-4 mb-2`}>Email Address</Text>
    <TextInput style={tw`p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3`}
    value={email}
    placeholder='Enter Your Email Address'
    />
    <Text style={tw`text-gray-700 ml-4 mb-2`}>Password</Text>
    <TextInput style={tw`p-4 bg-gray-100 text-gray-700 rounded-2xl`}
    value={password}
    placeholder='Enter Your Password'
    secureTextEntry
    />
    <TouchableOpacity style={tw`flex items-end mb-5 mt-5`} onPress={handleSubmit}>
    <Text style={tw`text-gray-700`}> Forgot Password?</Text>
    </TouchableOpacity>
    <TouchableOpacity style={tw`py-3 bg-yellow-400 rounded-xl`} onPress={()=> navigation.navigate('')}>
        <Text style={tw`font-xl font-bold text-center text-gray-700`}>Login</Text>
    </TouchableOpacity>

    </View>
    <Text style={tw`text-xl font-bold text-center text-gray-700 py-5 `}>Or</Text>
    <View style={tw`flex-row justify-center`}>
      <TouchableOpacity style={tw`p-2 bg-gray-100 rounded-2xl mx-5`}>
        <Image source={googlelogo} style={tw`w-10 h-10`} />
      </TouchableOpacity>
      <TouchableOpacity style={tw`p-2 bg-gray-100 rounded-2xl mx-5`}>
        <Image source={applelogo} style={tw`w-10 h-10`} />
      </TouchableOpacity>
      <TouchableOpacity style={tw`p-2 bg-gray-100 rounded-2xl mx-5`}>
        <Image source={fblogo} style={tw`w-10 h-10`} />
      </TouchableOpacity>
    </View>
    <View style={[tw`flex-row justify-center mt-7 `, styles.txt1]}>
        <Text style={tw`text-gray-700 font-semibold`}>Don't have an account?</Text>
        <TouchableOpacity onPress={()=> navigation.navigate('Signup')}>
            <Text style={[tw`font-semibold text-yellow-400`, styles.txt2]}>Signup</Text>
        </TouchableOpacity>
    </View>
      </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
    box:{
        borderTopLeftRadius: 50,
        borderTopRightRadius:50,
    },
    txt1:{
        marginTop: 20,
    },
})