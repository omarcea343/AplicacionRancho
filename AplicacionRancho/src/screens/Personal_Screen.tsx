import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {
  NavigationContainer,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';

/*
const AlimentarAnimal = require('./assets/secciones/alimentar.png');
const AnimalesImg = require('./assets/secciones/animales.png');
const RegistrarAnimal = require('./assets/secciones/nuevo.png');

const Vender = require('./assets/secciones/alimentar.png');
const Almacen = require('./assets/secciones/animales.png');
const Compras = require('./assets/secciones/nuevo.png');
*/

//const route = useRoute();

interface RoutesProps {}

let res: string = '';
let resPuesto: string = '';
//let obj: MyObj = JSON.parse("{'user': 'Hola'}");

interface MyObj {
  nombre: string;
}

interface MyObj1 {
  puesto: string;
}
const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

const Ventas = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.scroll}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('ConsVentasCompleto' as never)}>
          <Image
            source={require('../../assets/secciones/ConsultaCompVentas.jpg')}
            style={styles.image}
          />
        </TouchableOpacity>
        <Text> </Text>
        <TouchableOpacity
          style={styles.button2}
          onPress={() => navigation.navigate('RegVenta' as never)}>
          <Image
            source={require('../../assets/secciones/venta.jpg')}
            style={styles.image}
          />
        </TouchableOpacity>
        <Text> </Text>
        <TouchableOpacity
          style={styles.button3}
          onPress={() => navigation.navigate('ConsAlmacen' as never)}>
          <Image
            source={require('../../assets/secciones/almacen.jpg')}
            style={styles.image}
          />
        </TouchableOpacity>
        <Text> </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('ConsClientesCompl' as never)}>
          <Image
            source={require('../../assets/secciones/ConsCliente.jpg')}
            style={styles.image}
          />
        </TouchableOpacity>
        <Text> </Text>
        <TouchableOpacity style={styles.button}  onPress={() => navigation.navigate('ConsProvComp' as never)}>
          <Image
            source={require('../../assets/secciones/ConsProveedorComp.jpg')}
            style={styles.image}
          />
        </TouchableOpacity>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
      </View>
    </ScrollView>
  );
};

const Animales = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.scroll}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('ConsultaComplAnimales' as never)}>
          <Image
            source={require('../../assets/secciones/animales.png')}
            style={styles.image}
          />
        </TouchableOpacity>
        <Text> </Text>
        <TouchableOpacity
          style={styles.button2}
          onPress={() => navigation.navigate('ActAlimAnim' as never)}>
          <Image
            source={require('../../assets/secciones/alimentar.png')}
            style={styles.image}
          />
        </TouchableOpacity>
        <Text> </Text>
        <TouchableOpacity
          style={styles.button3}
          onPress={() => navigation.navigate('RegAnimal' as never)}>
          <Image
            source={require('../../assets/secciones/nuevo.png')}
            style={styles.image}
          />
        </TouchableOpacity>
        <Text> </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('ConsAlimAnimCompleto' as never)}>
          <Image
            source={require('../../assets/secciones/ConsAlimAnim.jpg')}
            style={styles.image}
          />
        </TouchableOpacity>
        <Text> </Text>
        <TouchableOpacity
          style={styles.button2}
          onPress={() => navigation.navigate('ConsActividadCompleto' as never)}>
          <Image
            source={require('../../assets/secciones/ConsComplAct.jpg')}
            style={styles.image}
          />
        </TouchableOpacity>
        <Text> </Text>

        <TouchableOpacity
          style={styles.button3}
          onPress={() => navigation.navigate('ConsTipoAnimCompleto' as never)}>
          <Image
            source={require('../../assets/secciones/ConsTipoAnimComp.jpg')}
            style={styles.image}
          />
        </TouchableOpacity>
        <Text> </Text>
        <TouchableOpacity style={styles.button2}  onPress={() => navigation.navigate('ConsMatPrimPersonal' as never)}>
          <Image
            source={require('../../assets/secciones/ConsMateria.jpg')}
            style={styles.image}
          />
        </TouchableOpacity>
        <Text> </Text>
        <TouchableOpacity style={styles.button3}  onPress={() => navigation.navigate('ConsAlimVenComp' as never)}>
          <Image
            source={require('../../assets/secciones/ConsAlimVentaComp.jpg')}
            style={styles.image}
          />
        </TouchableOpacity>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
      </View>
    </ScrollView>
  );
};

interface HomeProps {}
export const Usuario = ({}: HomeProps) => {
  const navigation = useNavigation();

  return (
    <View style={styles.userContainer}>
      <Image
        source={require('../../assets/Iconos/IconoPersonal.jpg')}
        style={styles.userImg}
      />
      <Text style={styles.userText}>{res}</Text>
      <Text style={styles.textoPuesto}>{resPuesto}</Text>
      <TouchableOpacity
        style={styles.logoutBtn}
        onPress={() => navigation.navigate('Login' as never)}>
        <Image
          source={require('../../assets/logout.jpg')}
          style={styles.image}
        />
      </TouchableOpacity>
    </View>
  );
};

const AppTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          if (route.name === 'Usuario') {
            return (
              <Image
                source={require('../../assets/Iconos/userIcon.png')}
                style={styles.icon}
              />
            );
          } else if (route.name === 'Ventas') {
            return (
              <Image
                source={require('../../assets/Iconos/iconVentas.png')}
                style={styles.icon}
              />
            );
          } else if (route.name === 'Animales') {
            return (
              <Image
                source={require('../../assets/Iconos/logoAnimales.png')}
                style={styles.icon}
              />
            );
          }
        },
        headerShown: false,
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      })}>
      <Tab.Screen name="Usuario" component={Usuario} />
      <Tab.Screen name="Ventas" component={Ventas} />
      <Tab.Screen name="Animales" component={Animales} />
    </Tab.Navigator>
  );
};

export function getNamePer(nombre: any) {
  //let obj:MyObj= JSON.parse(nombre)
  res = nombre;
  console.log(res, ' desde Personal_Screen');
}

export function getPuestoPer(puestoP: any) {
  console.log('valor al momento de entrar a la funcion ', puestoP);
  //let ps:MyObj1 = JSON.parse(puestoP)
  resPuesto = puestoP;
  console.log(resPuesto, ' desde Personal Screen');
}

const Routes = ({}: RoutesProps) => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={AppTab} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 305,
    height: 159,
    marginBottom: 20,
  },
  instructions: {
    color: '#888',
    fontSize: 18,
    marginHorizontal: 15,
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
  },
  button2: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
  },
  button3: {
    backgroundColor: 'orange',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  },
  image: {
    width: 350,
    height: 100,
    borderRadius: 15,
  },
  icon: {
    width: 40,
    height: 35,
  },
  userContainer: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: 'white',
    height: '100%',
  },
  userImg: {
    width: 180,
    height: 180,
    borderRadius: 100,
    top: -35,
    padding: 20,
  },
  userText: {
    fontSize: 45,
    top: -40,
    color: 'black',
  },
  textoPuesto: {
    fontSize: 25,
    top: -40,
    color: 'gray',
  },
  logoutBtn: {
    top: 90,
    backgroundColor: 'white',
  },
  scroll: {
    paddingTop: 40,
  },
});

export default Routes;
