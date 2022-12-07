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


const Stack = createStackNavigator();
import { ip } from '../config/ip';
let msg = "";

const VentaInic = () => {
  const navigation = useNavigation();

  const [modalVisible1, setModalVisible1] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [modalVisible3, setModalVisible3] = useState(false);
  const [modalVisible4, setModalVisible4] = useState(false);

  const [idCliente, setIdCliente] = useState('');
  const [idClientef, setIdClientef] = useState(0);
  const [idProd, setIdProd] = useState('');
  const [idProdf, setIdProdf] = useState(0);

  const [total, setTotal] = useState('');
  const [totalf, setTotalf] = useState(0);
  const [cantidad, setCantidad] = useState('');
  const [cantidadf, setCantidadf] = useState(0);
  const [precio, setPrecio] = useState('');
  const [preciof, setPreciof] = useState(0);
  const [fecha, setFecha] = useState('');

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
          <View style={styles.modal2}>
            <Text style={styles.modalText}>
              ¡Registro Completado Exitosamente!
            </Text>
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
        <Modal animationType="slide" visible={modalVisible3}>
          <View style={styles.modal}>
            <Text style={styles.modalText}>
              ¡Ingrese formato correcto para los campos!
            </Text>
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
          <View style={styles.modal}>
            <Text style={styles.modalText}>{msg}</Text>
            <Image
              source={require('../../assets/cow2.jpg')}
              resizeMode="contain"
              style={styles.Image}
            />
          </View>
        </Modal>
        <Text style={styles.txtTitle}>Registrar Venta</Text>
        <Text style={styles.insText}>Ingrese el id del Cliente:</Text>
        <Input
          value={idCliente}
          style={styles.input}
          placeholder="Ingrese el ID del cliente"
          onChangeText={idClientee => saveIdCliente(idClientee)}
          autoComplete={undefined}
        />

        <Text style={styles.insText}>Id Producto:</Text>
        <Input
          value={idProd}
          style={styles.input}
          placeholder="Ingrese el id del Producto"
          onChangeText={IdProdd => saveIdProd(IdProdd)}
          autoComplete={undefined}
        />

        <Text style={styles.insText}>Cantidad:</Text>
        <Input
          value={cantidad}
          style={styles.input}
          placeholder="Ingrese la cantidad"
          onChangeText={cantidadd => saveCantidad(cantidadd)}
          autoComplete={undefined}
        />

        <Text style={styles.insText}>Precio:</Text>
        <Input
          value={precio}
          style={styles.input}
          placeholder="Ingrese el precio"
          onChangeText={precioo => savePrecio(precioo)}
          autoComplete={undefined}
        />

        <Text style={styles.insText}>Total:</Text>
        <Input
          value={total}
          style={styles.input}
          placeholder="Ingrese el total"
          onChangeText={totall => saveTotal(totall)}
          autoComplete={undefined}
        />

        <Text style={styles.insText}>Fecha:</Text>
        <Input
          value={fecha}
          style={styles.input}
          placeholder="YYYY-MM-DD"
          onChangeText={fechaa => saveFecha(fechaa)}
          autoComplete={undefined}
        />

        <TouchableOpacity style={styles.btn} onPress={() => validoYenvio()}>
          <Text style={styles.text}>Registrar Venta</Text>
        </TouchableOpacity>
        <Text> </Text>
        <Text> </Text>
      </ScrollView>
    </SafeAreaView>
  );

  function saveIdCliente(idClientee: string) {
    setIdCliente(idClientee);
    let n: number = parseInt(idClientee);
    setIdClientef(n);
  }

  function saveIdProd(idProdd: string) {
    setIdProd(idProdd);
    let n: number = parseInt(idProdd);
    setIdProdf(n);
  }

  function saveTotal(totall: string) {
    setTotal(totall);
    let n: number = parseInt(totall);
    setTotalf(n);
  }

  function saveCantidad(cantidadd: string) {
    setCantidad(cantidadd);
    let n: number = parseInt(cantidadd);
    setCantidadf(n);
  }

  function savePrecio(precioo: string) {
    setPrecio(precioo);
    let n: number = parseFloat(precioo);
    setPreciof(n);
  }

  function saveFecha(fechaa: string) {
    setFecha(fechaa);
  }

  function validoYenvio() {
    if (
      idCliente === '' ||
      idProd === '' ||
      total === '' ||
      cantidad === '' ||
      total === '' ||
      fecha === ''
    ) {
      setIdCliente('');
      setIdProd('');
      setTotal('');
      setCantidad('');
      setPrecio('');
      setFecha('');
      setModalVisible1(true);
    } else {
      if (!isNaN(idClientef) && !isNaN(idProdf) && !isNaN(totalf) && !isNaN(cantidadf) && !isNaN(preciof)) {
        fetch(`http://${ip}/ventas/create-venta`, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-type': 'application/json',
          },
          body: JSON.stringify({
            id_Cliente: idClientef,
            id_Producto: idProdf,
            Cantidad: cantidadf,
            Precio: preciof,
            Total: totalf,
            Fecha: fecha,
          }),
        })
          .then(respuesta => respuesta.json())
          .then(responseJson => {
            console.log(responseJson);
            if(responseJson.ok){
              msg = responseJson.msg
              setModalVisible4(true)
              navigation.navigate('Personal' as never)
            }else{
              setModalVisible2(true);
              navigation.navigate('Personal' as never);
            }

          })
          .catch(error => {
            console.log(error);
          });
      } else {
        setModalVisible3(true);
        setIdCliente('');
        setIdProd('');
        setTotal('');
        setCantidad('');
        setPrecio('');
        setFecha('');
      }
    }
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

export default VentaInic;
