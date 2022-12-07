import {useNavigation} from '@react-navigation/core';
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
import { Row, Rows, Table, TableWrapper } from 'react-native-table-component';
interface RoutesProps {}

const Stack = createStackNavigator();

import { ip } from '../config/ip';

let id: any;
let nombre: any;
let descripcion: any;
let cantidad: any;
let tipoUnidad: any;

let msg: any;

const ActualizarDireccion_Screen = () => {
  const navigation = useNavigation();

  const [modalVisible1, setModalVisible1] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [modalVisible3, setModalVisible3] = useState(false);
  const [modalVisible4, setModalVisible4] = useState(false);


  const [idDireccion, setIdDireccion] = useState('');
  const [idDireccionf, setIdDireccionf] = useState(0);

  const [calle,setCalle] = useState('');
  const [numero,setNumero] = useState('')
  const [colonia,setColonia] = useState('')

  const [cp, setCP] = useState('')
  const [ CPf, setCPf ] = useState(0)
  const [ municipio, setMunicipio ] = useState('')
  const [ estado, setEstado ] = useState('')
  const [ pais, setPais] = useState('')




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
            <Text style={styles.modalText}>
              ¡Ingrese algún valor numérico válido!
            </Text>
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
            <Text style={styles.modalText}>Actualización de Datos Correcta</Text>
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
        <Modal animationType="slide" visible={modalVisible4}>
          <View style={styles.modal}>
            <Text style={styles.modalText}>Actualización de Datos Incorrecta</Text>
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
        <Text style={styles.txtTitle}>Actualizar Dirección</Text>
        <Text style={styles.insText}>
          Ingrese el ID de la dirección a actualizar:
        </Text>
        <Input
          value={idDireccion}
          style={styles.input}
          placeholder="Ingrese el ID"
          onChangeText={idd => saveIdDireccion(idd)}
          autoComplete={undefined}
        />

        <Text style={styles.insText}>
          Ingrese la calle a actualizar:
        </Text>
        <Input
          value={calle}
          style={styles.input}
          placeholder="Ingrese el ID de la dirección"
          onChangeText={callee => saveCalle(callee)}
          autoComplete={undefined}
        />

        <Text style={styles.insText}>
          Ingrese el número a actualizar:
        </Text>
        <Input
          value={numero}
          style={styles.input}
          placeholder="Ingrese Número"
          onChangeText={numeroo => saveNumero(numeroo)}
          autoComplete={undefined}
        />

        
        <Text style={styles.insText}>
          Ingrese la colonia a actualizar:
        </Text>
        <Input
          value={colonia}
          style={styles.input}
          placeholder="Ingrese la colonia"
          onChangeText={coloniaa => saveColonia(coloniaa)}
          autoComplete={undefined}
        />

        <Text style={styles.insText}>
          Ingrese el código postal a actualizar:
        </Text>
        <Input
          value={cp}
          style={styles.input}
          placeholder="Ingrese el código postal"
          onChangeText={cpp => saveCP(cpp)}
          autoComplete={undefined}
        />

        <Text style={styles.insText}>
          Ingrese el municipio a actualizar:
        </Text>
        <Input
          value={municipio}
          style={styles.input}
          placeholder="Ingrese el municipio"
          onChangeText={municipioo => saveMunicipio(municipioo)}
          autoComplete={undefined}
        />

        <Text style={styles.insText}>
          Ingrese el estado a actualizar:
        </Text>
        <Input
          value={estado}
          style={styles.input}
          placeholder="Ingrese el estado"
          onChangeText={estadoo => saveEstado(estadoo)}
          autoComplete={undefined}
        />

        <Text style={styles.insText}>
          Ingrese el país a actualizar:
        </Text>
        <Input
          value={pais}
          style={styles.input}
          placeholder="Ingrese el país"
          onChangeText={paiss => savePais(paiss)}
          autoComplete={undefined}
        />
        <TouchableOpacity style={styles.btn} onPress={() => validoYenvio()}>
          <Text style={styles.text}>Actualizar</Text>
        </TouchableOpacity>

        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
      </ScrollView>
    </SafeAreaView>
  );

  function validoYenvio() {
    if (idDireccion === '') {
        setIdDireccion('')
        setIdDireccionf(0);
        setCalle('')
        setNumero('')
        setColonia('')
        setCP('')
        setCPf(0)
        setMunicipio('')
        setEstado('')
        setPais('')
        setModalVisible1(true);
    } else {
      if (!isNaN(idDireccionf) && idDireccionf != 0 && !isNaN(CPf)) {
        console.log('funcion')
        fetch(`http://${ip}/direcciones/update-direccion/` + idDireccionf, {
          method: 'PUT',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify({
            id: idDireccionf,
            Calle: calle,
            Numero: numero,
            Colonia: colonia,
            CP:CPf,
            Municipio: municipio,
            Estado: estado,
            Pais: pais,
          }),
        })
          .then(respuesta => respuesta.json())
          .then(responseJson => {
            console.log('Entré ', responseJson);
            if(responseJson[0].affectedRows === 1){
                setModalVisible3(true)
                navigation.navigate('Admin' as never)
            }else if(responseJson[0].affectedRows === 0){
                setModalVisible4(true)
                setIdDireccion('')
                setIdDireccionf(0);
                setCalle('')
                setNumero('')
                setColonia('')
                setCP('')
                setCPf(0)
                setMunicipio('')
                setEstado('')
                setPais('')
            }

            
          })
          .catch(error => {
            setIdDireccion('')
            setIdDireccionf(0);
            setCalle('')
            setNumero('')
            setColonia('')
            setCP('')
            setCPf(0)
            setMunicipio('')
            setEstado('')
            setPais('')
            console.log(error);
          });
      } else {
        setIdDireccion('')
        setIdDireccionf(0);
        setCalle('')
        setNumero('')
        setColonia('')
        setCP('')
        setCPf(0)
        setMunicipio('')
        setEstado('')
        setPais('')

        setModalVisible2(true);
      }
    }
  }

  function saveIdDireccion(idd: string){
    setIdDireccion(idd)
    let n:number = parseInt(idd)
    setIdDireccionf(n)
  }
  function saveCP(cpp: string) {
    setCP(cpp);
    let n: number = parseInt(cpp);
    setCPf(n);
  }

  function saveCalle(callee: string) {
    setCalle(callee);
  }

  function saveNumero(numeroo: string) {
    setNumero(numeroo);
  }

  function saveColonia(coloniaa: string) {
    setColonia(coloniaa);

  }
  function saveMunicipio(municipioo: string) {
    setMunicipio(municipioo);
  
  }

  function saveEstado(estadoo: string){
    setEstado(estadoo)
  }

  function savePais(paiss:string){
    setPais(paiss)
  }


};


const ActDireccionInic = ({}: RoutesProps) => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="HomeActDireccion"
        component={ActualizarDireccion_Screen}
      />
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

export default ActDireccionInic;
