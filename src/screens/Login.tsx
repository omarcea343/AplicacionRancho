import React, { useState } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { Image } from 'react-native'
import LoginForm from '../components/LoginForm';

const Login = () => {
  return (
    <ScrollView style={styles.Scroll}>
        <Image
            source={require('../../assets/logo.jpg')}
            resizeMode='contain'
            style={styles.Image}
        />
        <View style={styles.container}>
            <LoginForm/>
        </View>
        <View style={styles.lineStyle}/>
    </ScrollView>
  )
}


const styles = StyleSheet.create({
    Image: {
        height: 200,
        width: '100%',
        marginBottom: 20,
        marginTop: 20
    },
    Scroll: {
        backgroundColor: "white",
    },
    container: {
        marginHorizontal: 40
    },
    lineStyle: {
        backgroundColor: '#442484',
        borderWidth: 0.5,
        borderColor: 'gray',
        margin: 40,
        marginTop: 25
    }
})

export default Login;