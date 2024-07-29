import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { signOut } from 'firebase/auth'
import { auth } from '../config/Firebase'

const Home = () => {
    const handleLogout = async ()=>{
        await signOut(auth);
    }
  return (
    <SafeAreaView>
        <TouchableOpacity >
            <Text>Logout</Text>
        </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({})