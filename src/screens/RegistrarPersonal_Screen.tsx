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

let msg:string = "";
const Stack = createStackNavigator();
import { ip } from '../config/ip';


const PersonalInic = () => {
  const navigation = useNavigation();

  const [modalVisible1, setModalVisible1] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [modalVisible3, setModalVisible3] = useState(false);
  const [modalVisible4, setModalVisible4] = useState(false);


  const [idAct, setIdAct] = useState('');
  const [idActf, setIdActf] = useState(0);
  const [idMat, setIdMat] = useState('');
  const [idMatf, setIdMatf] = useState(0);

  const [nombre, setNombre] = useState('');
  const [puesto, setPuesto] = useState('');
  const [salario, setSalario] = useState('');
  const [salariof, setSalariof] = useState(0);
  const [turno, setTurno] = useState('');
  const [turnof, setTurnof] = useState(0);
  const [estatus, setEstatus] = useState('');
  const [cuenta, setCuenta] = useState('');
  const [contra, setContra] = useState('');

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
            <Text style={styles.modalText}>
              {msg}
            </Text>
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
        <Text style={styles.txtTitle}>Registrar Personal</Text>
        <Text style={styles.insText}>
          Ingrese el id de actividad a realizar:
        </Text>
        <Input
          value={idAct}
          style={styles.input}
          placeholder="Ingrese el ID"
          onChangeText={idActt => saveIdAct(idActt)}
          autoComplete={undefined}
        />

        <Text style={styles.insText}>Id Material:</Text>
        <Input
          value={idMat}
          style={styles.input}
          placeholder="Ingrese el id de material"
          onChangeText={IdMatt => saveIdMate(IdMatt)}
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

        <Text style={styles.insText}>Puesto:</Text>
        <Input
          value={puesto}
          style={styles.input}
          placeholder="Ingrese el puesto"
          onChangeText={puestoo => savePuesto(puestoo)}
          autoComplete={undefined}
        />

        <Text style={styles.insText}>Salario:</Text>
        <Input
          value={salario}
          style={styles.input}
          placeholder="Ingrese el puesto"
          onChangeText={salarioo => saveSalario(salarioo)}
          autoComplete={undefined}
        />

        <Text style={styles.insText}>Turno:</Text>
        <Input
          value={turno}
          style={styles.input}
          placeholder="Ingrese el turno"
          onChangeText={turnoo => saveTurno(turnoo)}
          autoComplete={undefined}
        />

        <Text style={styles.insText}>Estatus:</Text>
        <Input
          value={estatus}
          style={styles.input}
          placeholder="Ingrese el estatus"
          onChangeText={estatuss => saveEstatus(estatuss)}
          autoComplete={undefined}
        />

        <Text style={styles.insText}>Cuenta:</Text>
        <Input
          value={cuenta}
          style={styles.input}
          placeholder="Ingrese la cuenta"
          onChangeText={cuentaa => saveCuenta(cuentaa)}
          autoComplete={undefined}
        />

        <Text style={styles.insText}>Contraseña:</Text>
        <Input
          value={contra}
          style={styles.input}
          placeholder="Ingrese la contraseña"
          onChangeText={contra => saveContra(contra)}
          autoComplete={undefined}
        />

        <TouchableOpacity style={styles.btn} onPress={() => validoYenvio()}>
          <Text style={styles.text}>Registrar Personal</Text>
        </TouchableOpacity>
        <Text> </Text>
        <Text> </Text>
      </ScrollView>
    </SafeAreaView>
  );

  function saveIdAct(idActt: string) {
    setIdAct(idActt);
    let n: number = parseInt(idActt);
    setIdActf(n);
  }

  function saveIdMate(idMatt: string) {
    setIdMat(idMatt);
    let n: number = parseInt(idMatt);
    setIdMatf(n);
  }

  function saveNombre(nombree: string) {
    setNombre(nombree);
  }

  function savePuesto(puestoo: string) {
    setPuesto(puestoo);
  }

  function saveSalario(salarioo: string) {
    setSalario(salarioo);
    let n: number = parseFloat(salarioo);
    setSalariof(n);
  }

  function saveTurno(turnoo: string) {
    setTurno(turnoo);
    let n: number = parseInt(turnoo);
    setTurnof(n);
  }

  function saveEstatus(estatuss: string) {
    setEstatus(estatuss);
  }

  function saveCuenta(cuentaa: string) {
    setCuenta(cuentaa);
  }

  function saveContra(contraa: string) {
    setContra(contraa);
  }
  function validoYenvio() {
    if (
      idAct === '' ||
      idMat === '' ||
      nombre === '' ||
      puesto === '' ||
      salario === '' ||
      turno === '' ||
      estatus === '' ||
      cuenta === '' ||
      contra === ''
    ) {
      setIdAct('');
      setIdMat('');
      setNombre('');
      setPuesto('');
      setSalario('');
      setTurno('');
      setEstatus('');
      setCuenta('');
      setContra('');
      setModalVisible1(true);
    } else {
      if (estatus.length != 1 /*(estatus != "1" || estatus != "0"*/) {
        setModalVisible3(true);
      } else {
        if (!isNaN(idActf) && !isNaN(idMatf) && !isNaN(salariof) && !isNaN(turnof)) {
          fetch(`http://${ip}/personal/create-persona`, {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-type': 'application/json',
            },
            body: JSON.stringify({
              id_Actividad: idActf,
              id_Material: idMatf,
              Nombre: nombre,
              Puesto: puesto,
              Salario: salariof,
              Turno: turnof,
              Estatus: estatus,
              Cuenta: cuenta,
              Contra: contra,
            }),
          })
            .then(respuesta => respuesta.json())
            .then(responseJson => {
              console.log(responseJson);
              if (responseJson.ok) {
                console.log('Validado');
                navigation.navigate('Admin' as never);
                setModalVisible2(true);
              }else{
                msg = responseJson.msg
                setModalVisible4(true)
                navigation.navigate('Admin' as never)
              }
            })
            .catch(error => {
              console.log(error);
            });
        }else {
            setModalVisible3(true)
            setIdAct('')
            setIdMat('')
            setNombre('')
            setPuesto('')
            setSalario('')
            setTurno('')
            setEstatus('')
            setCuenta('')
            setContra('')
        }
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

export default PersonalInic;
