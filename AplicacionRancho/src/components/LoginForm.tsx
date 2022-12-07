import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Alert, TextInput, Modal, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import  { Input }   from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import { getNamePer, getPuestoPer, Usuario } from '../screens/Personal_Screen';
import { getNameAdm, getPuestoAdm } from '../screens/Admin_Screen';

import { ip } from '../config/ip';

let msg:string = ""
let err:string = ""
const LoginForm = () => {
  const [showPassword, setshowPassword] = useState(false)

  const [modalVisible1, setModalVisible1] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [modalVisible3, setModalVisible3] = useState(false);
  const [modalVisible4, setModalVisible4] = useState(false);let ret: string = "";

  const [user, setUser] = useState("")
  const [passw, setPassw] = useState("")
 
  const navigation = useNavigation();
function saveUser(usr: any){
  setUser(usr)
}
function savePass(psw: any){
  setPassw(psw)

}


function validarVacio(){
  if( user === '' && passw != ''){
    setUser('')
    setPassw('')
    //Alert.alert("Ingrese un nombre!!")
    setModalVisible1(true)
  }else if( passw === '' && user != ''){
    setUser('')
    setPassw('')
    //Alert.alert("Ingrese una Contraseña!!")
    setModalVisible2(true)
  }else if(user === '' && passw === ''){
    //Alert.alert("Rellene los campos")
    setModalVisible3(true)
  }else{
    fetch(`https://${ip}/login/validar-usuario`,{
      method: 'POST',
      headers:{
        'Accept': 'application/json',
        'Content-type':'application/json'
      },
      body: JSON.stringify({
        Cuenta: user,
        Contra: passw,
      })
    })
    .then((respuesta) => respuesta.json())
    .then(async (responseJson) =>{
      console.log(responseJson);
      if(responseJson.ok){
        if(responseJson.puesto === 'Empleado'){
          AsyncStorage.setItem('puesto', JSON.stringify(responseJson.puesto))
          const puestoP= JSON.stringify(responseJson.puesto);
          getPuestoPer(responseJson.puesto)
          AsyncStorage.setItem('nombre',JSON.stringify(responseJson.nombre));
          const nombre = JSON.stringify(responseJson.nombre);
          getNamePer(responseJson.nombre)
          navigation.navigate('Personal' as never);
          setUser('')
          setPassw('')
        }else if(responseJson.puesto === 'Jefe' || responseJson.puesto === 'Administrador'){
          //Necesito otra Screen
          AsyncStorage.setItem('puesto', JSON.stringify(responseJson.puesto))
          const puestoP= await AsyncStorage.getItem('puesto')
          getPuestoAdm(responseJson.puesto)
          AsyncStorage.setItem('nombre',JSON.stringify(responseJson.nombre));
          const nombre = await AsyncStorage.getItem('nombre')
          getNameAdm(responseJson.nombre)
          navigation.navigate('Admin' as never);
          setUser('')
          setPassw('')        }
      }else if(!responseJson.ok){
        msg = responseJson.msg;
        err = responseJson.err
        setModalVisible4(true);
        setUser('')
        setPassw('')
      }
    })
    .catch(async (error) =>{
      /*AsyncStorage.setItem('user',JSON.stringify(user));
      const value = await AsyncStorage.getItem('user')
      console.log(value)
      AsyncStorage.setItem('puesto',JSON.stringify(passw));
      const test = await AsyncStorage.getItem('puesto')
      getNamePer(value)
      console.log(test," en Login")
      getPuestoPer(test)
      navigation.navigate('Personal' as never);
      setUser('')
      setPassw('')*/

      /*console.log(error);
      navigation.navigate('Admin' as never)
      setUser('')
      setPassw('')*/

      console.log(error)
    })
  }
}
  
  return (
    <View style={styles.container}>
      <Modal animationType='slide' visible={modalVisible1}>
          <View style={styles.modal}>
            <Text style={styles.modalText}>¡Ingrese el nombre de usuario!</Text>
            <Image source={require("../../assets/cow.png")}  resizeMode='contain' style={styles.Image}/>

            <Button title="Entendido" onPress = {() => {  
                  setModalVisible1(false)}}/> 
          </View>
      </Modal>
      <Modal animationType='slide' visible={modalVisible2}>
          <View style={styles.modal}>
            <Text style={styles.modalText}>¡Ingrese la contraseña!</Text>
            <Image source={require("../../assets/cow.png")}  resizeMode='contain' style={styles.Image}/>
            <Button title="Entendido" onPress = {() => {  
                  setModalVisible2(false)}}/> 
          </View>
      </Modal>
      <Modal animationType='slide' visible={modalVisible3}>
          <View style={styles.modal}>
            <Text style={styles.modalText}>¡Rellene los campos!</Text>
            <Image source={require("../../assets/cow.png")}  resizeMode='contain' style={styles.Image}/>
            <Button title="Entendido" onPress = {() => {  
                  setModalVisible3(false)}}/> 
          </View>
      </Modal>
      <Modal animationType='slide' visible={modalVisible4}>
          <View style={styles.modal}>
            <Text style={styles.modalText}>{msg}</Text>
            <Text style={styles.modalText}>{err}</Text>
            <Image source={require("../../assets/cow.png")}  resizeMode='contain' style={styles.Image}/>
            <Button title="Entendido" onPress = {() => {  
                  setModalVisible4(false)}}/> 
          </View>
      </Modal>
        <Input
        value={user}
        style={styles.input}
        placeholder='Usuario'
        onChangeText={(user) => saveUser({ user })} autoComplete={undefined}       />
        <Input 
        value={passw}
        placeholder='Contraseña'
        style={styles.input}
        secureTextEntry={!showPassword}
        onChangeText={(pass) => savePass({ pass })}
        rightIcon={<TouchableOpacity onPress={() => setshowPassword(!showPassword)}>

          <Image
            source={showPassword ? require('../../assets/ojo1.jpg') : require('../../assets/ojo.jpg')} style={{
              width: 30,
              height: 30
            }} />

        </TouchableOpacity>} autoComplete={undefined}        >
           
          </Input>
          <TouchableOpacity style={styles.btn} onPress={() => validarVacio()}>
            <Text style={styles.text}>Iniciar Sesión</Text>
          </TouchableOpacity>

    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,

    },
    input: {
        width: '100%',
        
    },
    icon: {
      color: '#c1c1c1'
    },
    btn: {
      alignItems: 'center',
      backgroundColor: '#442484',
      padding: 10,
      width: '80%',
      marginTop:40
    },
    
    text: {
      fontFamily: 'Arial',
      fontSize: 20,
      color: 'white'
    },
    modal: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#B8B8B8',
      height: 300,
      width: '80%',
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#fff',
      marginTop: 200,
      marginLeft: 40,
    },
    modalText: {
      color: 'black',
      marginTop: 10,
      marginBottom: 20,
      fontSize: 25
    },
    Image: {
      height: 130,
      width: '100%',
      marginBottom: 20,
      marginTop: 20
    },

})

export default LoginForm



