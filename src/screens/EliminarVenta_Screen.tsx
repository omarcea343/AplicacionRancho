import { useNavigation } from '@react-navigation/core';
import {createStackNavigator} from '@react-navigation/stack';
import React, {useState} from 'react';
import {
    Button,
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Input} from '@rneui/themed';
import {SafeAreaView} from 'react-native-safe-area-context';


const Stack = createStackNavigator();

import { ip } from '../config/ip';

let msg: string = ""

const ElimVenta_Screen = () => {

    const navigation = useNavigation();

  const [modalVisible1, setModalVisible1] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [modalVisible3, setModalVisible3] = useState(false);
  const [modalVisible4, setModalVisible4] = useState(false);


  const [idVenta, setIdVenta] = useState('');
  const [idVentaf, setIdVentaf] = useState(0);

  const [idCliente, setIdCliente] = useState('')
  const [idClientef, setIdClientef] = useState(0)

    return (
        <SafeAreaView style={styles.container}>
          <ScrollView style={styles.scroll}>
            <Modal animationType="slide" visible={modalVisible1}>
              <View style={styles.modal}>
                <Text style={styles.modalText}>¡Ingrese algún dato!</Text>
                <Image
                  source={require('../../assets/cow2.jpg')}
                  resizeMode="contain"
                  style={styles.Image}
                />
    
                <Button
                  title="Entendido"
                  onPress={() => {
                    setModalVisible1(false);
                  }}
                />
              </View>
            </Modal>
            <Modal animationType="slide" visible={modalVisible2}>
              <View style={styles.modal}>
                <Text style={styles.modalText}>¡Ingrese algún valor numérico válido!</Text>
                <Image
                  source={require('../../assets/cow2.jpg')}
                  resizeMode="contain"
                  style={styles.Image}
                />
                <Button
                  title="Entendido"
                  onPress={() => {
                    setModalVisible2(false);
                  }}
                />
              </View>
            </Modal>
            <Modal animationType="slide" visible={modalVisible3}>
              <View style={styles.modal}>
                <Text style={styles.modalText}>{msg}</Text>
                <Image
                  source={require('../../assets/cow2.jpg')}
                  resizeMode="contain"
                  style={styles.Image}
                />
                <Button
                  title="Entendido"
                  onPress={() => {
                    setModalVisible3(false);
                  }}
                />
              </View>
            </Modal>
            <Modal animationType="slide" visible={modalVisible4}>
                <View style={styles.modal2}>
                  <Text style={styles.modalText}>{msg}</Text>
                  <Image
                    source={require('../../assets/pig.jpg')}
                    resizeMode="contain"
                    style={styles.Image}
                  />
                 
                 <Image
                    source={require('../../assets/success.jpg')}
                    resizeMode="contain"
                    style={styles.Image}
                  />
                </View>
              </Modal>
            <Text style={styles.txtTitle}>Eliminar Venta</Text>
            <Text style={styles.insText}>Ingrese el ID de la venta a eliminar:</Text>
            <Input
              value={idVenta}
              style={styles.input}
              placeholder="Ingrese el ID de la venta"
              onChangeText={idd => saveID(idd)}
              autoComplete={undefined}
            />
            <Text style={styles.insText}>Ingrese el ID del cliente:</Text>
            <Input
              value={idCliente}
              style={styles.input}
              placeholder="Ingrese el ID del cliente"
              onChangeText={idd => saveID2(idd)}
              autoComplete={undefined}
            />

            <TouchableOpacity style={styles.btn} onPress={() => validoYenvio()}>
              <Text style={styles.text}>Eliminar Venta</Text>
            </TouchableOpacity>
    
            <Text> </Text>
            <Text> </Text>
            <Text> </Text>
          </ScrollView>
        </SafeAreaView>
      );

      function validoYenvio() {
        if (idVenta === '' ) {
            
            setIdVenta('')
    
            setModalVisible1(true)
        }else{
            if(!isNaN(idVentaf) && idVentaf != 0){
                fetch(`http://${ip}/ventas/delete-venta/` + idVentaf + `/` + idClientef,{
                    method: 'DELETE',
                  })
                  .then((respuesta) => respuesta.json())
                  .then(responseJson =>{
                      if(responseJson.ok){
                        msg = responseJson.msg
                        setModalVisible4(true)
                        navigation.navigate('Admin' as never)
                      }else{
                        msg = responseJson.msg
                        setModalVisible3(true)
                      }
                   })
                   .catch(error =>{
                        setIdVenta('')
                        setIdVentaf(0)
                        console.log(error)
                   })
                  
            }else{
                setIdVenta('')
                setIdVentaf(0)
                setModalVisible2(true)
            }
        }
      }
      function saveID(idd: string) {
        setIdVenta(idd);
        let n: number = parseInt(idd);
        setIdVentaf(n);
    
      }
      function saveID2(idd: string) {
        setIdCliente(idd);
        let n: number = parseInt(idd);
        setIdClientef(n);
    
      }
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    input: {
      width: '100%',
    },
    icon: {
      color: '#c1c1c1',
    },
    btn: {
      alignItems: 'center',
      backgroundColor: 'red',
      padding: 10,
      width: '100%',
      marginTop: 40,
    },
  
    text: {
      fontFamily: 'Arial',
      fontSize: 20,
      color: 'white',
    },
    modal: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#FFFF',
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
      fontSize: 25,
    },
    Image: {
      height: 130,
      width: '100%',
      marginBottom: 20,
      marginTop: 20,
    },
    modal2:{
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#FFFF',
      height: 400,
      width: '80%',
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#fff',
      marginTop: 200,
      marginLeft: 40,
    },
    insText: {
      fontSize: 20,
      color: '#3E3838',
      top: -5,
      justifyContent: 'center',
      alignItems: 'center',
    },
    scroll: {
      width: '100%',
      padding: 15,
    },
    txtTitle:{
      fontSize: 25,
      color: '#921818',
      marginBottom: 20,
      fontWeight: 'bold'
    }
  });
  
  export default ElimVenta_Screen;