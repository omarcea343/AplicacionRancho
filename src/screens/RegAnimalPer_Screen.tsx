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

const AnimalInic = () => {
  const navigation = useNavigation();

  const [modalVisible1, setModalVisible1] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [modalVisible3, setModalVisible3] = useState(false);
  const [modalVisible4, setModalVisible4] = useState(false);

  const [idTipoAnim, setIdTipoAnim] = useState('');
  const [idTipoAnimf, setIdTipoAnimf] = useState(0);
  const [peso, setPeso] = useState('');
  const [pesof, setPesof] = useState(0);

  const [litrosDia, setLitrosDia] = useState('');
  const [litrosDiaf, setLitrosDiaf] = useState(0);
  const [litrosTotal, setLitrosTotal] = useState('');
  const [litrosTotalf, setLitrosTotalf] = useState(0);
  
  const [huevosDia, setHuevosDia] = useState('');
  const [huevosDiaf, setHuevosDiaf] = useState(0);

  const [huevosTotal,setHuevosTotal] = useState('')
  const [huevosTotalf,setHuevosTotalf ] = useState(0)


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
        <Text style={styles.txtTitle}>Registrar Animal</Text>
        <Text style={styles.insText}>Ingrese el id del Tipo de Animal:</Text>
        <Input
          value={idTipoAnim}
          style={styles.input}
          placeholder="Ingrese el ID del tipo de animal"
          onChangeText={idTipoAnimm => saveIdTipoAnimal(idTipoAnimm)}
          autoComplete={undefined}
        />

        <Text style={styles.insText}>Peso:</Text>
        <Input
          value={peso}
          style={styles.input}
          placeholder="Ingrese el Peso"
          onChangeText={pesoo => savePeso(pesoo)}
          autoComplete={undefined}
        />

        <Text style={styles.insText}>Litros del Día:</Text>
        <Input
          value={litrosDia}
          style={styles.input}
          placeholder="Ingrese los litros del día"
          onChangeText={litrosDiaa => saveLitrosDia(litrosDiaa)}
          autoComplete={undefined}
        />

        <Text style={styles.insText}>Litros Totales:</Text>
        <Input
          value={litrosTotal}
          style={styles.input}
          placeholder="Ingrese los litros totales"
          onChangeText={litrosTotaless => saveLitrosTotales(litrosTotaless)}
          autoComplete={undefined}
        />

        <Text style={styles.insText}>Huevos del Día:</Text>
        <Input
          value={huevosDia}
          style={styles.input}
          placeholder="Ingrese la cantidad de huevos del día"
          onChangeText={huevosDiaa => saveHuevosDia(huevosDiaa)}
          autoComplete={undefined}
        />

        <Text style={styles.insText}>Huevos Totales:</Text>
        <Input
          value={huevosTotal}
          style={styles.input}
          placeholder="Ingrese la cantidad de huevos totales"
          onChangeText={huevosTotaless => saveHuevosTotales(huevosTotaless)}
          autoComplete={undefined}
        />

        <TouchableOpacity style={styles.btn} onPress={() => validoYenvio()}>
          <Text style={styles.text}>Registrar Animal</Text>
        </TouchableOpacity>
        <Text> </Text>
        <Text> </Text>
      </ScrollView>
    </SafeAreaView>
  );

  function saveIdTipoAnimal(idTipoAnimm: string) {
    setIdTipoAnim(idTipoAnimm);
    let n: number = parseInt(idTipoAnimm);
    setIdTipoAnimf(n);
  }

  function savePeso(pesoo: string) {
    setPeso(pesoo);
    let n: number = parseFloat(pesoo);
    setPesof(n);
  }

  function saveLitrosDia(litrosDiaa:string){
    setLitrosDia(litrosDiaa)
    let n:number = parseFloat(litrosDiaa)
    setLitrosDiaf(n)
  }

  function saveLitrosTotales(litrosTotales:string){
    setLitrosTotal(litrosTotales)
    let n:number = parseFloat(litrosTotales)
    setLitrosTotalf(n)
  }

  function saveHuevosDia(huevosDiaa: string) {
    setHuevosDia(huevosDiaa);
    let n: number = parseInt(huevosDiaa);
    setHuevosDiaf(n);
  }

  function saveHuevosTotales(huevosTotaless: string) {
    setHuevosTotal(huevosTotaless);
    let n: number = parseInt(huevosTotaless);
    setHuevosTotalf(n);
  }


  function validoYenvio() {
    if (
      idTipoAnim === '' ||
      peso === '' ||
      litrosDia === '' ||
      litrosTotal === '' ||
      huevosDia === '' ||
      huevosTotal === '' 
    ) {
      setIdTipoAnim('');
      setPeso('');
      setLitrosDia('');
      setHuevosTotal('')
      setLitrosTotal('');
      setHuevosDia('');
      setModalVisible1(true);
    } else {
      if (!isNaN(idTipoAnimf) && !isNaN(pesof) && !isNaN(litrosDiaf) && !isNaN(litrosTotalf) && !isNaN(huevosDiaf) && !isNaN(huevosTotalf)) {
        fetch(`http://${ip}/animales/create-animal`, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-type': 'application/json',
          },
          body: JSON.stringify({
            id_Tipo_Animal: idTipoAnimf,
            Peso: pesof,
            Litros_Dia: litrosDiaf,
            Litros_Total: litrosTotalf,
            Huevos_Dia: huevosDiaf,
            Huevos_Total: huevosTotal,
          }),
        })
          .then(respuesta => respuesta.json())
          .then(responseJson => {
            console.log(responseJson);
            if(responseJson.ok === false){
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
        setIdTipoAnim('');
        setPeso('');
        setLitrosDia('');
        setLitrosTotal('');
        setHuevosDia('');
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

export default AnimalInic;
