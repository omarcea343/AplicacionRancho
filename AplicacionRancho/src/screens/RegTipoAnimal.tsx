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

const TipoAnimalInic = () => {
  const navigation = useNavigation();

  const [modalVisible1, setModalVisible1] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [modalVisible3, setModalVisible3] = useState(false);
  const [modalVisible4, setModalVisible4] = useState(false);

  const [idAlimento, setIdAlimento] = useState('');
  const [idAlimentof, setIdAlimentof] = useState(0);
  const [idAlimVenta, setIdAlimVenta] = useState('');
  const [idAlimVentaf, setIdAlimVentaf] = useState(0);

  const [idPersonal, setIdPersonal] = useState('');
  const [idPersonalf, setIdPersonalf] = useState(0);
  const [nombre,setNombre] = useState('')
  const [cantidad, setCantidad] = useState('');
  const [cantidadf, setCantidadf] = useState(0);
  const [precio, setPrecio] = useState('');
  const [preciof, setPreciof] = useState(0);
  const [comida, setComida] = useState('');

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
        <Text style={styles.insText}>Ingrese el id del Alimento:</Text>
        <Input
          value={idAlimento}
          style={styles.input}
          placeholder="Ingrese el ID del alimento"
          onChangeText={idAlimentoo => saveIdAlimento(idAlimentoo)}
          autoComplete={undefined}
        />

        <Text style={styles.insText}>Id Alimento de Venta:</Text>
        <Input
          value={idAlimVenta}
          style={styles.input}
          placeholder="Ingrese el id de Venta"
          onChangeText={IdAlimVenn => saveIdAlimVenta(IdAlimVenn)}
          autoComplete={undefined}
        />

        <Text style={styles.insText}>Id Personal:</Text>
        <Input
          value={idPersonal}
          style={styles.input}
          placeholder="Ingrese el id del Personal"
          onChangeText={IdPerr => saveIdPersonal(IdPerr)}
          autoComplete={undefined}
        />

        <Text style={styles.insText}>Nombre:</Text>
        <Input
          value={nombre}
          style={styles.input}
          placeholder="Ingrese el nombre"
          onChangeText={nombree => saveNombre(nombree)}
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

        <Text style={styles.insText}>Comida:</Text>
        <Input
          value={comida}
          style={styles.input}
          placeholder="Ingrese comida"
          onChangeText={comidaa => saveComida(comidaa)}
          autoComplete={undefined}
        />

        <TouchableOpacity style={styles.btn} onPress={() => validoYenvio()}>
          <Text style={styles.text}>Registrar Tipo Animal</Text>
        </TouchableOpacity>
        <Text> </Text>
        <Text> </Text>
      </ScrollView>
    </SafeAreaView>
  );

  function saveIdAlimento(idAlimentoo: string) {
    setIdAlimento(idAlimentoo);
    let n: number = parseInt(idAlimentoo);
    setIdAlimentof(n);
  }

  function saveIdAlimVenta(idVentt: string) {
    setIdAlimVenta(idVentt);
    let n: number = parseInt(idVentt);
    setIdAlimVentaf(n);
  }

  function saveIdPersonal(idPerr:string){
    setIdPersonal(idPerr)
    let n:number = parseInt(idPerr)
    setIdPersonalf(n)
  }

  function saveNombre(nombree:string){
    setNombre(nombree)
  }

  function saveComida(totall: string) {
    setComida(totall);
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


  function validoYenvio() {
    if (
      idAlimento === '' ||
      idAlimVenta === '' ||
      idPersonal === '' ||
      cantidad === '' ||
      idPersonal === '' ||
      comida === '' ||
      nombre === '' ||
      precio === ''
    ) {
      setIdAlimento('');
      setIdAlimVenta('');
      setIdPersonal('');
      setNombre('')
      setCantidad('');
      setPrecio('');
      setComida('');
      setModalVisible1(true);
    } else {
      if (!isNaN(idAlimentof) && !isNaN(idAlimVentaf) && !isNaN(idPersonalf) && comida.length === 1) {
        fetch(`http://${ip}/tipoAnimales/create-tipo_animal`, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-type': 'application/json',
          },
          body: JSON.stringify({
            id_Alimento: idAlimentof,
            id_Alimento_Venta: idAlimVentaf,
            id_Personal: idPersonalf,
            Nombre: nombre,
            Cantidad: cantidadf,
            Precio: preciof,
            Comida: comida
          }),
        })
          .then(respuesta => respuesta.json())
          .then(responseJson => {
            console.log(responseJson);
            if(responseJson.ok){
              setModalVisible2(true);
              navigation.navigate('Admin' as never);
            }else{
              msg = responseJson.msg
              setModalVisible4(true)
              navigation.navigate('Admin' as never)
            }

          })
          .catch(error => {
            console.log(error);
          });
      } else {
        setModalVisible3(true);
        setIdAlimento('');
        setIdAlimVenta('');
        setIdPersonal('');
        setCantidad('');
        setPrecio('');
        setComida('');
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

export default TipoAnimalInic;
