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

const ActualizarPersonal_Screen = () => {
  const navigation = useNavigation();

  const [modalVisible1, setModalVisible1] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [modalVisible3, setModalVisible3] = useState(false);
  const [modalVisible4, setModalVisible4] = useState(false);


  const [idPersonal, setIdPersonal] = useState('');
  const [idPersonalf, setIdPersonalf] = useState(0);

  const [idActividad, setIdActividad] = useState('');
  const [idActividadf, setIdActividadf] = useState(0);

  const [idMaterial, setIdMaterial] = useState('');
  const [idMaterialf, setIdMaterialf] = useState(0);

  const [nombre,setNombre] = useState('');
  const [puesto,setPuesto] = useState('')
  const [salario,setSalario] = useState('')
  const [salariof,setSalariof] = useState(0)
  const [turno,setTurno] = useState('')
  const [turnof, setTurnof] = useState(0)

  const [estatus,setEstatus] = useState('')
  const [cuenta,setCuenta] = useState('')
  const [contra,setContra] = useState('')


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
            <Text style={styles.modalText}>Error al actualizar</Text>
            <Image
              source={require('../../assets/pig.jpg')}
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
        <Text style={styles.txtTitle}>Actualizar Personal</Text>
        <Text style={styles.insText}>
          Ingrese el ID del personal a actualizar:
        </Text>
        <Input
          value={idPersonal}
          style={styles.input}
          placeholder="Ingrese el ID"
          onChangeText={idd => saveID(idd)}
          autoComplete={undefined}
        />

        <Text style={styles.insText}>
          Ingrese el ID de actividad a actualizar:
        </Text>
        <Input
          value={idActividad}
          style={styles.input}
          placeholder="Ingrese el ID"
          onChangeText={idd => saveIdAct(idd)}
          autoComplete={undefined}
        />

        <Text style={styles.insText}>
          Ingrese el ID del material a actualizar:
        </Text>
        <Input
          value={idMaterial}
          style={styles.input}
          placeholder="Ingrese el ID"
          onChangeText={idd => saveIdMat(idd)}
          autoComplete={undefined}
        />

        <Text style={styles.insText}>
          Ingrese el nombre del personal a actualizar:
        </Text>
        <Input
          value={nombre}
          style={styles.input}
          placeholder="Ingrese el nombre"
          onChangeText={nombree => saveNombre(nombree)}
          autoComplete={undefined}
        />

        <Text style={styles.insText}>
          Ingrese el puesto a actualizar:
        </Text>
        <Input
          value={puesto}
          style={styles.input}
          placeholder="Ingrese Puesto"
          onChangeText={puestoo => savePuesto(puestoo)}
          autoComplete={undefined}
        />

        
        <Text style={styles.insText}>
          Ingrese el salario a actualizar:
        </Text>
        <Input
          value={salario}
          style={styles.input}
          placeholder="Ingrese el salario"
          onChangeText={salarioo => saveSalario(salarioo)}
          autoComplete={undefined}
        />

        <Text style={styles.insText}>
          Ingrese el turno a actualizar:
        </Text>
        <Input
          value={turno}
          style={styles.input}
          placeholder="Ingrese el turno"
          onChangeText={turnoo => saveTurno(turnoo)}
          autoComplete={undefined}
        />

        <Text style={styles.insText}>
          Ingrese el estatus a actualizar:
        </Text>
        <Input
          value={estatus}
          style={styles.input}
          placeholder="Ingrese el estatus"
          onChangeText={estatuss => saveEstatus(estatuss)}
          autoComplete={undefined}
        />

        <Text style={styles.insText}>
          Ingrese la cuenta a actualizar:
        </Text>
        <Input
          value={cuenta}
          style={styles.input}
          placeholder="Ingrese la cuenta"
          onChangeText={cuentaa => saveCuenta(cuentaa)}
          autoComplete={undefined}
        />

        <Text style={styles.insText}>
          Ingrese la contraseña a actualizar:
        </Text>
        <Input
          value={contra}
          style={styles.input}
          placeholder="Ingrese la cuenta"
          onChangeText={contraa => saveContra(contraa)}
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
    if (idPersonal === '' || idActividad === '' || idMaterial === '' || nombre === '' || puesto === '' || salario === '' || turno === '' || estatus === '' || cuenta === '' || contra === '') {
        setIdPersonal('');
        setIdActividad('')
        setIdMaterial('')
        setNombre('')
        setPuesto('')
        setSalario('')
        setTurno('')
        setEstatus('')
        setCuenta('')
        setContra('')
        setModalVisible1(true);
    } else {
      if (!isNaN(idPersonalf) && idPersonalf != 0 && !isNaN(idActividadf) && idActividadf != 0 && !isNaN(idMaterialf) && idMaterialf != 0 && estatus.length === 1) {
        console.log('funcion')
        fetch(`http://${ip}/personal/update-persona/` + idPersonalf, {
          method: 'PUT',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify({
            id_Actividad: idActividadf,
            id_Material: idMaterialf,
            Nombre: nombre,
            Puesto: puesto,
            Salario:salariof,
            Turno: turno,
            Estatus: estatus,
            Cuenta: cuenta,
            Contra: contra,
          }),
        })
          .then(respuesta => respuesta.json())
          .then(responseJson => {
            if(responseJson[0].affectedRows === 0){
              msg = responseJson.msg
              setModalVisible4(true)
            }else{
              console.log('Entré ', responseJson);
              setModalVisible3(true)
              navigation.navigate('Admin' as never)
            }
            
          })
          .catch(error => {
            setIdPersonal('');
            setIdPersonalf(0);
            setNombre('')
            setPuesto('')
            setSalario('')
            setSalariof(0)
            setTurno('')
            setTurnof(0)
            console.log(error);
          });
      } else {
        setIdPersonal('');
        setIdPersonalf(0);
        setNombre('')
        setPuesto('')
        setSalario('')
        setSalariof(0)
        setTurno('')
        setTurnof(0)
        setModalVisible2(true);
      }
    }
  }
  function saveID(idd: string) {
    setIdPersonal(idd);
    let n: number = parseInt(idd);
    setIdPersonalf(n);
  }

  function saveIdAct(idd: string){
    setIdActividad(idd)
    let n:number = parseInt(idd)
    setIdActividadf(n)
  }

  function saveIdMat(idd: string){
    setIdMaterial(idd)
    let n:number = parseInt(idd)
    setIdMaterialf(n)
  }



  function saveNombre(nombree: string) {
    setNombre(nombree);
  }

  function savePuesto(puestoo: string) {
    setPuesto(puestoo);
  }
  function saveSalario(salarioo: string) {
    setSalario(salarioo);
    let n: number = parseInt(salarioo);
    setSalariof(n);
  }

  function saveTurno(turnoo: string) {
    setTurno(turnoo);
    let n: number = parseInt(turnoo);
    setTurnof(n);
  }

  function saveEstatus(estatuss: string){
    setEstatus(estatuss)
  }

  function saveCuenta(cuentaa:string){
    setCuenta(cuentaa)
  }
  function saveContra(contraa:string){
    setContra(contraa)
  }
};

const ActPersonalInic = ({}: RoutesProps) => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="HomeActPer"
        component={ActualizarPersonal_Screen}
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

export default ActPersonalInic;
