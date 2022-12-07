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

const ActualizarProveedor_Screen = () => {
  const navigation = useNavigation();

  const [modalVisible1, setModalVisible1] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [modalVisible3, setModalVisible3] = useState(false);
  const [modalVisible4, setModalVisible4] = useState(false);


  const [idProveedor, setIdProveedor] = useState('');
  const [idProveedorf, setIdProveedorf] = useState(0);
  const [idDireccion, setIdDireccion] = useState('');
  const [idDireccionf, setIdDireccionf] = useState(0);
  const [razonS,setRazonS] = useState('');
  const [telefono,setTelefono] = useState('')
  const [correo, setCorreo] = useState('');
  const [estatus, setEstatus] = useState('');

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
            <Text style={styles.modalText}>{msg}</Text>
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
        <Text style={styles.txtTitle}>Actualizar Proveedor</Text>
        <Text style={styles.insText}>
          Ingrese el ID del proveeedor a actualizar:
        </Text>
        <Input
          value={idProveedor}
          style={styles.input}
          placeholder="Ingrese el ID"
          onChangeText={idd => saveIdProveedor(idd)}
          autoComplete={undefined}
        />

        <Text style={styles.insText}>
          Ingrese el ID de la direccion de proveedor a actualizar:
        </Text>
        <Input
          value={idDireccion}
          style={styles.input}
          placeholder="Ingrese el ID"
          onChangeText={idd => saveIdDireccion(idd)}
          autoComplete={undefined}
        />

        <Text style={styles.insText}>
          Ingrese la razón social a actualizar:
        </Text>
        <Input
          value={razonS}
          style={styles.input}
          placeholder="Ingrese Razón Social"
          onChangeText={razonSS => saveRazonS(razonSS)}
          autoComplete={undefined}
        />

        <Text style={styles.insText}>
          Ingrese el teléfono de proveedor a actualizar:
        </Text>
        <Input
          value={telefono}
          style={styles.input}
          placeholder="Ingrese Teléfono"
          onChangeText={telefonoo => saveTelefono(telefonoo)}
          autoComplete={undefined}
        />
        
        <Text style={styles.insText}>
          Ingrese el correo de proveedor a actualizar:
        </Text>
        <Input
          value={correo}
          style={styles.input}
          placeholder="Ingrese Correo"
          onChangeText={correoo => saveCorreo(correoo)}
          autoComplete={undefined}
        />

        <Text style={styles.insText}>
          Ingrese el estatus de proveedor a actualizar:
        </Text>
        <Input
          value={estatus}
          style={styles.input}
          placeholder="Ingrese Estatus"
          onChangeText={estatuss => saveEstatus(estatuss)}
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
    if (idProveedor === '' && idDireccion === '' && razonS === '' && telefono === '' && correo === '' && estatus === '') {
        setIdProveedor('')
        setIdProveedorf(0)
        setIdDireccion('')
        setIdDireccionf(0)
        setRazonS('')
        setTelefono('')
        setCorreo('')
        setEstatus('')

        setModalVisible1(true);
    } else {
      if (!isNaN(idProveedorf) && idProveedorf != 0) {
        console.log('funcion')
        fetch(`http://${ip}/proveedores/update-proveedor/` + idProveedorf, {
          method: 'PUT',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify({
            id_Proveedor: idProveedorf,
            id_Direccion: idDireccionf,
            RazonSocial: razonS,
            Telefono: telefono,
            Correo: correo,
            Estatus: estatus
 
          }),
        })
          .then(respuesta => respuesta.json())
          .then(responseJson => {
            console.log('Entré ', responseJson);
            if( responseJson.affectedRows === 1){
 
              setModalVisible3(true)
              navigation.navigate('Admin' as never)
            }else if(!responseJson.ok){
              msg = responseJson.msg
              setModalVisible4(true)
              setIdProveedor('')
              setIdProveedorf(0)
              setIdDireccion('')
              setIdDireccionf(0)
              setRazonS('')
              setTelefono('')
              setCorreo('')
              setEstatus('')


            }

            
          })
          .catch(error => {
            console.log(error);
          });
      } else {
        setIdProveedor('')
        setIdProveedorf(0)
        setIdDireccion('')
        setIdDireccionf(0)
        setRazonS('')
        setTelefono('')
        setCorreo('')
        setEstatus('')
        setModalVisible2(true);
      }
    }
  }

  function saveIdProveedor(idd: string){
    setIdProveedor(idd)
    let n:number = parseInt(idd)
    setIdProveedorf(n)
  }

  function saveIdDireccion(idDirr:string){
    setIdDireccion(idDirr)
    let n:number = parseInt(idDirr)
    setIdDireccionf(n)
  }

  function saveCorreo(correoo:string){
    setCorreo(correoo)
  }

  function saveEstatus(estatuss:string){
    setEstatus(estatuss)
  }
  function saveRazonS(nombree: string) {
    setRazonS(nombree);
  }

  function saveTelefono(telefonoo: string) {
    setTelefono(telefonoo);
  }



};


const ActProveedorInic = ({}: RoutesProps) => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="HomeActProveedor"
        component={ActualizarProveedor_Screen}
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

export default ActProveedorInic;
