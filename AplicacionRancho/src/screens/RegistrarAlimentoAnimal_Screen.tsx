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

let msg:string = "";

const RegistrarAlimentoAnimal_Screen = () => {
    const navigation = useNavigation();

  const [modalVisible1, setModalVisible1] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [modalVisible3, setModalVisible3] = useState(false);
  const [modalVisible4, setModalVisible4] = useState(false);


  const [nombreAli, setAlim] = useState('');
  const [descripcion, setDesc] = useState('');
  const [cantidad, setCantidad] = useState('');
  const [cantidadf, setCantidadf] = useState(0);
  const [unidad, setUnidad] = useState('');


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
            <Text style={styles.modalText}>¡Ingrese un Código Postal válido!</Text>
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
        <Modal animationType="slide" visible={modalVisible4}>
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
            </View>
          </Modal>
        <Text style={styles.txtTitle}>Registrar Alimento para Animal</Text>
        <Text style={styles.insText}>Ingrese el nombre del alimento:</Text>
        <Input
          value={nombreAli}
          style={styles.input}
          placeholder="Ingrese el nombre del alimento"
          onChangeText={nombreAlii => saveNombreAlim(nombreAlii)}
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

        <Text style={styles.insText}>Tipo de Unidad</Text>
        <Input
          value={unidad}
          style={styles.input}
          placeholder="Ingrese el Tipo de Unidad"
          onChangeText={unidadd => saveUnidad(unidadd)}
          autoComplete={undefined}
        />

        <TouchableOpacity style={styles.btn} onPress={() => validoYenvio()}>
          <Text style={styles.text}>Registrar Alimento</Text>
        </TouchableOpacity>

        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
      </ScrollView>
    </SafeAreaView>
  );

  function validoYenvio() {
    if (nombreAli === '' || descripcion === '' || cantidad === '' || unidad === ''  ) {
        
        setAlim('')
        setDesc('')
        setCantidad('')
        setUnidad('')

        setModalVisible1(true)
    }else{
        if(!isNaN(cantidadf)){
            fetch(`http://${ip}/alimentoAnimal/create-alimentoAnimal`,{
                method: 'POST',
                headers:{
                  'Accept': 'application/json',
                  'Content-type':'application/json'
                },
                body: JSON.stringify({
                    Nombre: nombreAli,
                    Descripcion: descripcion,
                    Cantidad: cantidadf,
                    TipoUnidad: unidad

                })
              })
              .then((respuesta) => respuesta.json())
              .then(responseJson =>{
                  if(responseJson.ok){
                    navigation.navigate('Admin' as never)
                    setModalVisible4(true)
                  }else{
                    msg = responseJson.msg
                    setModalVisible3(true)
                  }
               })
               .catch(error =>{

                    /*console.log(nombreAli)
                    console.log(descripcion)
                    console.log(cantidadf + 0.3)
                    console.log(unidad)
                    navigation.navigate('Admin' as never)
                    setModalVisible4(true)*/
                    console.log(error)
               })
              
        }else{
            setAlim('')
            setDesc('')
            setCantidad('')
            setUnidad('')
            setModalVisible2(true)
        }
    }
  }
  function saveNombreAlim(nombreAlii: string) {
    setAlim(nombreAlii);
  }
  function saveDesc(desc: string) {
    setDesc(desc);
  }

  function saveCantidad(cantidadd: string) {
    setCantidad(cantidadd);
    let n: number = parseFloat(cantidadd);
    setCantidadf(n);

  }

  function saveUnidad(unidadd: string) {
    setUnidad(unidadd);
  }

};

const AlimAnimInic = ({}: RoutesProps) => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeAliAnim" component={RegistrarAlimentoAnimal_Screen} />

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

export default AlimAnimInic;
