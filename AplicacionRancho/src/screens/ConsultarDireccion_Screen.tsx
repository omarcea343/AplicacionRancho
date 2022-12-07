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
let calle: any;
let numero: any;
let colonia: any;
let cp: any;
let municipio: any;
let estado: any;
let pais: any;

let msg: any;

const ConsultarDireccion_Screen = () => {
  const navigation = useNavigation();

  const [modalVisible1, setModalVisible1] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [modalVisible3, setModalVisible3] = useState(false);

  const [idDireccion, setIdDireccion] = useState('');
  const [idDireccionf, setIdDireccionf] = useState(0);

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
        <Text style={styles.txtTitle}>Consultar Dirección</Text>
        <Text style={styles.insText}>
          Ingrese el ID de la dirección a buscar:
        </Text>
        <Input
          value={idDireccion}
          style={styles.input}
          placeholder="Ingrese el ID"
          onChangeText={idd => saveID(idd)}
          autoComplete={undefined}
        />

        <TouchableOpacity style={styles.btn} onPress={() => validoYenvio()}>
          <Text style={styles.text}>Buscar</Text>
        </TouchableOpacity>

        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
      </ScrollView>
    </SafeAreaView>
  );

  function validoYenvio() {
    if (idDireccion === '') {
      setIdDireccion('');

      setModalVisible1(true);
    } else {
      if (!isNaN(idDireccionf) && idDireccionf != 0) {
        fetch(`http://${ip}/direcciones/get-dataDireccion/` + idDireccionf, {
          method: 'GET',
        })
          .then(respuesta => respuesta.json())
          .then(responseJson => {

            if(responseJson.ok === false){
                msg = responseJson.msg;
                setModalVisible3(true)
                console.log(responseJson.msg)
            }else{
                console.log('Entré ', responseJson);
                id = responseJson[0].id;
                calle = responseJson[0].Calle;
                numero = responseJson[0].Numero;
                colonia = responseJson[0].Colonia
                cp = responseJson[0].CP
                municipio = responseJson[0].Municipio
                estado = responseJson[0].Estado
                pais = responseJson[0].Pais
                navigation.navigate('resConsDir' as never);
            }

          })
          .catch(error => {
            setIdDireccion('');
            setIdDireccionf(0);
            console.log(error);
          });
      } else {
        setIdDireccion('');
        setIdDireccionf(0);
        setModalVisible2(true);
      }
    }
  }
  function saveID(idd: string) {
    setIdDireccion(idd);
    let n: number = parseInt(idd);
    setIdDireccionf(n);
  }
};

const ResConsultarDireccion_Screen = () => {
  const navigation = useNavigation();
  const header = ['ID', 'Calle', 'Número', 'Colonia', 'CP','Municipio', 'Estado', 'País']
  const data = [
      [id, calle, numero, colonia, cp, municipio, estado, pais],
  

  ]
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scroll}>
        <Text style={styles.txtTitle}>
          Resultados Consultar Dirección para id: {id}
        </Text>
        <Table borderStyle={{borderWidth: 1, borderColor: 'white', justifyContent: 'center', alignContent: 'center', alignItems: 'center'}}>
          <Row data={header} style={{height: 90, backgroundColor: 'gray'}} textStyle={{color: 'white',textAlign: 'center'}} />
          <Rows data={data} style={{height:120, }} textStyle={{textAlign: 'center'}}/>
        </Table> 
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('Admin' as never)}>
          <Text style={styles.text}>Hecho</Text>
        </TouchableOpacity>

        <Text> </Text>
        <Text> </Text>
        <Text> </Text>


      </ScrollView>
    </SafeAreaView>
  );
};

const ConsDireccionInic = ({}: RoutesProps) => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="HomeConsDir"
        component={ConsultarDireccion_Screen}
      />
      <Stack.Screen
        name="resConsDir"
        component={ResConsultarDireccion_Screen}
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

export default ConsDireccionInic;
