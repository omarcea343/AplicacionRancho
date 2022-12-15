import React, { useEffect, useState} from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Row, Rows, Table } from 'react-native-table-component';
import { useNavigation } from '@react-navigation/core';


import { ip } from '../config/ip';

function useDatos() {
    const [info, setInfo] = useState<any[]>([])
   
    useEffect(() => {
      fetch(`http://${ip}/login/query10`)
        .then(response => response.json())
        .then(datos => {
          console.log(datos)
          setInfo(datos)
        })
    }, [])
   
    return info;
  }



const ConsultarReporte10 = () => {

    const navigation = useNavigation();
    const datos = useDatos()
    const header = ['ID Personal','Nombre Personal','Actividad a Realizar']
    console.log(datos)
    return (
   
        <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scroll}>
          <Text style={styles.txtTitle}>
            Actividad para cada Trabajador
          </Text>
          <Table borderStyle={{borderWidth: 1, borderColor: 'black', justifyContent: 'center', alignContent: 'center', alignItems: 'center'}}>
            <Row data={header} style={{height: 90, backgroundColor: 'gray'}} textStyle={{color: 'white',textAlign: 'center'}}/> 
            {datos.map(item =>(
                <Row key={item.id} data={[item.id,item.PersonalRegistrado,item.ActividadDeTrabajo]} style={{height: 90, backgroundColor: 'white'}} textStyle={{color: 'black',textAlign: 'center'}} /> 
            ))}
          
          </Table> 


          <TouchableOpacity
            style={styles.btn} onPress={() => navigation.navigate('Admin' as never)}>
            <Text style={styles.text}>Hecho</Text>
          </TouchableOpacity>
  
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
  
  
        </ScrollView>
      </SafeAreaView>
    )
}

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
      backgroundColor: 'green',
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
      fontSize: 25,
    },
    Image: {
      height: 130,
      width: '100%',
      marginBottom: 20,
      marginTop: 20,
    },
    modal2: {
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
    txtTitle: {
      fontSize: 25,
      color: '#921818',
      marginBottom: 20,
      fontWeight: 'bold',
    },
  });
  
  
export default ConsultarReporte10
