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

interface RoutesProps {}

const Stack = createStackNavigator();

import { ip } from '../config/ip';


const RegistrarMateriaPrima_Screen = () => {
    const navigation = useNavigation();

  const [modalVisible1, setModalVisible1] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [modalVisible3, setModalVisible3] = useState(false);
  const [modalVisible4, setModalVisible4] = useState(false);


  const [nombreMat, setMat] = useState('');
  const [descripcion, setDesc] = useState('');
  const [cantidad, setCantidad] = useState('');
  const [cantidadf, setCantidadf] = useState(0);


  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scroll}>
        <Modal animationType="slide" visible={modalVisible1}>
          <View style={styles.modal}>
            <Text style={styles.modalText}>¡Ingrese todos los campos!</Text>
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
            <Text style={styles.modalText}>¡Upps... Algo salió mal!</Text>
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
            <View style={styles.modal2}>
              <Text style={styles.modalText}>¡Registro Completado Exitosamente!</Text>
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
              <Button
                title="Entendido"
                onPress={() => {
                  setModalVisible3(false);
                }}
              />
            </View>
          </Modal>
          <Modal animationType="slide" visible={modalVisible4}>
          <View style={styles.modal}>
            <Text style={styles.modalText}>¡Ingrese valor numérico para cantidad!</Text>
            <Image
              source={require('../../assets/cow2.jpg')}
              resizeMode="contain"
              style={styles.Image}
            />

            <Button
              title="Entendido"
              onPress={() => {
                setModalVisible4(false);
              }}
            />
          </View>
        </Modal>
        <Text style={styles.txtTitle}>Registrar Materia Prima</Text>
        <Text style={styles.insText}>Ingrese el nombre de la materia:</Text>
        <Input
          value={nombreMat}
          style={styles.input}
          placeholder="Ingrese el nombre de la materia"
          onChangeText={nombreMatt => saveNombreMat(nombreMatt)}
          autoComplete={undefined}
        />

        <Text style={styles.insText}>Descripción</Text>
        <Input
          value={descripcion}
          style={styles.input}
          placeholder="Ingrese una breve descripción"
          onChangeText={desc => saveDesc(desc)}
          autoComplete={undefined}
        />

        <Text style={styles.insText}>Cantidad</Text>
        <Input
          value={cantidad}
          style={styles.input}
          placeholder="Ingrese la cantidad"
          onChangeText={cantidadd => saveCantidad(cantidadd)}
          autoComplete={undefined}
        />


        <TouchableOpacity style={styles.btn} onPress={() => validoYenvio()}>
          <Text style={styles.text}>Registrar Materia Prima</Text>
        </TouchableOpacity>

        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
      </ScrollView>
    </SafeAreaView>
  );

  function validoYenvio() {
    if (nombreMat === '' || descripcion === '' || cantidad === '' ) {
        
        setMat('')
        setDesc('')
        setCantidad('')

        setModalVisible1(true)
    }else{
        if(!isNaN(cantidadf)){
            fetch(`http://${ip}/materiaPrima/save-materiaPrima`,{
                method: 'POST',
                headers:{
                  'Accept': 'application/json',
                  'Content-type':'application/json'
                },
                body: JSON.stringify({
                    Nombre: nombreMat,
                    Descripcion: descripcion,
                    Cantidad: cantidadf,

                })
              })
              .then((respuesta) => respuesta.json())
              .then(responseJson =>{
                  if(responseJson.ok){
                    navigation.navigate('Admin' as never)
                    setModalVisible3(true)
                  }else{
                    setModalVisible2(true)
                  }
               })
               .catch(error =>{

                    /*console.log(nombreMat)
                    console.log(descripcion)
                    console.log(cantidadf + 3)
                    navigation.navigate('Admin' as never)
                    setModalVisible3(true)*/

                    console.log(error)
               })
              
        }else{
            setMat('')
            setDesc('')
            setCantidad('')
            setModalVisible4(true)
        }
    }
  }
  function saveNombreMat(matt: string) {
    setMat(matt);
  }
  function saveDesc(desc: string) {
    setDesc(desc);
  }

  function saveCantidad(cantidadd: string) {
    setCantidad(cantidadd);
    let n: number = parseInt(cantidadd);
    setCantidadf(n);

  }

};

const MatPrimInic = ({}: RoutesProps) => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeMatPrim" component={RegistrarMateriaPrima_Screen} />

    </Stack.Navigator>
  );
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

export default MatPrimInic;
