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
let precioUnitario: any;
let cantidad: any;
let tipoUnidad: any;

let msg: any;

const ConsultarAlimentoVenta_Screen = () => {
  const navigation = useNavigation();

  const [modalVisible1, setModalVisible1] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [modalVisible3, setModalVisible3] = useState(false);

  const [idAlimVenta, setIdAlimVenta] = useState('');
  const [idAlimVentaf, setIdAlimVentaf] = useState(0);

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
        <Text style={styles.txtTitle}>Consultar Alimento Venta</Text>
        <Text style={styles.insText}>
          Ingrese el ID del alimento de venta a buscar:
        </Text>
        <Input
          value={idAlimVenta}
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
    if (idAlimVenta === '') {
      setIdAlimVenta('');

      setModalVisible1(true);
    } else {
      if (!isNaN(idAlimVentaf) && idAlimVentaf != 0) {
        fetch(`http://${ip}/alimentoVenta/get-dataAlimento/` + idAlimVentaf, {
          method: 'GET',
        })
          .then(respuesta => respuesta.json())
          .then(responseJson => {
            console.log('Entré ', responseJson);

            if(responseJson.ok === false){
              msg = responseJson.msg
              setModalVisible3(true)
            }else{
              id = responseJson[0].id;
              nombre = responseJson[0].Nombre;
              precioUnitario = responseJson[0].PrecioUnitario;
              cantidad = responseJson[0].Cantidad;
              tipoUnidad = responseJson[0].TipoUnidad
              navigation.navigate('resConsAlimVenta' as never);
            }
 
          })
          .catch(error => {
            setIdAlimVenta('');
            setIdAlimVentaf(0);
            console.log(error);
          });
      } else {
        setIdAlimVenta('');
        setIdAlimVentaf(0);
        setModalVisible2(true);
      }
    }
  }
  function saveID(idd: string) {
    setIdAlimVenta(idd);
    let n: number = parseInt(idd);
    setIdAlimVentaf(n);
  }
};

const ResConsultarAlimentoVenta_Screen = () => {
  const navigation = useNavigation();
  const header = ['ID', 'Nombre', 'Precio Unitario','Cantidad','Tipo de Unidad']
  const data = [
      [id, nombre, precioUnitario, cantidad, tipoUnidad],
  

  ]
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scroll}>
        <Text style={styles.txtTitle}>
          Resultados Consultar Alimento Animal para id: {id}
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

const ConsAlimVentaAdminInic = ({}: RoutesProps) => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="HomeConsAlimVenta"
        component={ConsultarAlimentoVenta_Screen}
      />
      <Stack.Screen
        name="resConsAlimVenta"
        component={ResConsultarAlimentoVenta_Screen}
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

export default ConsAlimVentaAdminInic;
