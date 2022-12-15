import React from 'react';
import Login from './src/screens/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import Routes from './src/screens/Personal_Screen';
import Routes1 from './src/screens/Admin_Screen';
import ProvInic from './src/screens/RegistrarProveedor_Screen';
import ClientInic from './src/screens/RegistrarClientes_Screen';
import AlimAnimInic from './src/screens/RegistrarAlimentoAnimal_Screen';
import MatPrimInic from './src/screens/RegistrarMatPrim';
import ElimAct_Screen from './src/screens/EliminarAct_Screen';
import ElimDireccion_Screen from './src/screens/EliminarDireccion_Screen';
import AlimVentaInic from './src/screens/RegistrarAlimentoVenta_Screen';
import ElimMatPri_Screen from './src/screens/EliminarMatPri_Screen';
import ElimAlimVen_Screen from './src/screens/EliminarAlimentoVenta';
import ElimCompra_Screen from './src/screens/EliminarCompra_Screen';
import ElimCliente_Screen from './src/screens/EliminarCliente_Screen';
import ElimAnimal_Screen from './src/screens/EliminarAnimal_Screen';
import ElimPersonal_Screen from './src/screens/EliminarPersonal_Screen';
import ElimProveedor_Screen from './src/screens/EliminarProveedor_Screen';
import ElimTipoAnim_Screen from './src/screens/EliminarTipoAnimal_Screen';
import ElimVenta_Screen from './src/screens/EliminarVenta_Screen';
import RegistrarActividad_Screen from './src/screens/RegistrarActividad_Screen';
import PersonalInic from './src/screens/RegistrarPersonal_Screen';
import CompraInic from './src/screens/RegistrarCompra_Screen';
import ConsTipAnimInic from './src/screens/ConsultarTipoAnimal_Screen';
import ConsActividadInic from './src/screens/ConsultarActividad_Screen';
import ConsDireccionInic from './src/screens/ConsultarDireccion_Screen';
import ConsAnimalesInic from './src/screens/ConsultarAnimales_Screen';
import ConsAlimAnimalInic from './src/screens/ConsultarAlimentoAnimal_Screen';
import ActAlimAnimalInic from './src/screens/ActualizarAlimentoAnimal';
import VentaInic from './src/screens/RegistrarVenta_Screen';
import ConsultarAlmace from './src/screens/ConsultarAlmace';
import ConsultarAnimales from './src/screens/ConsultarAnimalesCompleto_Screen';
import ConsultarAlimAnimCompleto from './src/screens/ConsultarAlimAnimCompleto_Screen';
import ConsultarVentasCompleto from './src/screens/ConsultaCpmpletaVentas_Screen';
import ConsultarActividadCompleto from './src/screens/ConsComplActividades_Screen';
import ConsultarTipoAnimalCompleto from './src/screens/ConsultaCompletaTipoAnimal_Screen';
import ActPersonalInic from './src/screens/ActualizarPersonal_Screen';
import ActAlimAnimalAdminInic from './src/screens/ActualizarAlimAnimAdmin_Screen';
import ActAlimVentaInic from './src/screens/ActualizarAlimentoVenta_Screen';
import TipoAnimalInic from './src/screens/RegTipoAnimal';
import AnimalInic from './src/screens/RegAnimalPer_Screen';
import ConsultarClientesCompleto from './src/screens/ConsultarClientesCompleto_Screen';
import ActClienteInic from './src/screens/ActualizarCliente_Screen';
import ConsClientesAdminInic from './src/screens/ConsultarClienteAdmin_Screen';
import ConsAlimVentaAdminInic from './src/screens/ConsAlimVentaAdmin';
import ConsultarMateriaPrimaAdmin from './src/screens/ConsultarMateriaPrimaAdmin_Screen';
import ConsultarMateriaPrimaPersonal from './src/screens/ConsultarMatPrimPersonal_Screen';
import ActDireccionInic from './src/screens/ActualizarDireccion_Screen';
import ActProveedorInic from './src/screens/ActualizarProveedor_Screen';
import ConsAlimVentaInic from './src/screens/ConsultarAlimVenta_Screen';
import ConsultarAlimVentaCompleto from './src/screens/ConsultarAlimVenta_Screen';
import ConsultarReporte1 from './src/screens/Reporte1_Screen';
import ConsultarReporte2 from './src/screens/Reporte2_Screen';
import ConsultarReporte3 from './src/screens/Reporte3_Screen';
import ConsultarReporte4 from './src/screens/Reporte4_Screen';
import ConsultarReporte5 from './src/screens/Reporte5_Screen';
import ConsProveedorAdminInic from './src/screens/ConsProveedor_Screen';
import ConsultarProveedorCompleto from './src/screens/ConsultaCompletaProveedor_Screen';
import ConsultarReporte6 from './src/screens/Reporte6_Screen';
import ConsultarReporte7 from './src/screens/Reporte7_Screen';
import ConsultarReporte8 from './src/screens/Reporte8_Screen';
import ConsultarReporte9 from './src/screens/Reporte9_Screen';
import ConsultarReporte10 from './src/screens/Reporte10_Screen';
import ConsultarReporte11 from './src/screens/Reporte11_Screen';
import ConsultarReporte12 from './src/screens/Reporte12_Screen';

const Stack = createStackNavigator();

const App = () => {
  
    
    return (
        <NavigationContainer>  
            <Stack.Navigator screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name='Login' component={Login}/>
                <Stack.Screen name='Personal' component={Routes}/> 
                <Stack.Screen name='Admin' component={Routes1}/> 
                <Stack.Screen name='RegProv' component={ProvInic}/> 
                <Stack.Screen name='RegCli' component={ClientInic}/> 
                <Stack.Screen name='RegAlimAnim' component={AlimAnimInic}/> 
                <Stack.Screen name='RegMatPrim' component={MatPrimInic}/> 
                <Stack.Screen name='RegAlimVenta' component={AlimVentaInic}/> 
                <Stack.Screen name='ElimAct' component={ElimAct_Screen}/> 
                <Stack.Screen name='ElimDir' component={ElimDireccion_Screen}/> 
                <Stack.Screen name='ElimMatP' component={ElimMatPri_Screen}/> 
                <Stack.Screen name='ElimAlimVen' component={ElimAlimVen_Screen}/> 
                <Stack.Screen name='ElimCompra' component={ElimCompra_Screen}/> 
                <Stack.Screen name='ElimCliente' component={ElimCliente_Screen}/> 
                <Stack.Screen name='ElimAnimal' component={ElimAnimal_Screen}/> 
                <Stack.Screen name='ElimPersonal' component={ElimPersonal_Screen}/> 
                <Stack.Screen name='ElimProveedor' component={ElimProveedor_Screen}/> 
                <Stack.Screen name='ElimTipoAnim' component={ElimTipoAnim_Screen}/> 
                <Stack.Screen name='ElimVenta' component={ElimVenta_Screen}/> 
                <Stack.Screen name='RegActividad' component={RegistrarActividad_Screen}/> 
                <Stack.Screen name='RegPersonal' component={PersonalInic}/> 
                <Stack.Screen name='RegCompra' component={CompraInic}/> 
                <Stack.Screen name='ConsTipoAnimal' component={ConsTipAnimInic}/> 
                <Stack.Screen name='ConsActividad' component={ConsActividadInic}/> 
                <Stack.Screen name='ConsDireccion' component={ConsDireccionInic}/> 
                <Stack.Screen name='ConsAnimal' component={ConsAnimalesInic}/> 
                <Stack.Screen name='ConsAlimAnim' component={ConsAlimAnimalInic}/> 
                <Stack.Screen name='ActAlimAnim' component={ActAlimAnimalInic}/> 
                <Stack.Screen name='RegVenta' component={VentaInic}/> 
                <Stack.Screen name='ConsAlmacen' component={ConsultarAlmace}/> 
                <Stack.Screen name='ConsultaComplAnimales' component={ConsultarAnimales}/> 
                <Stack.Screen name='ConsAlimAnimCompleto' component={ConsultarAlimAnimCompleto}/> 
                <Stack.Screen name='ConsVentasCompleto' component={ConsultarVentasCompleto}/> 
                <Stack.Screen name='ConsActividadCompleto' component={ConsultarActividadCompleto}/> 
                <Stack.Screen name='ConsTipoAnimCompleto' component={ConsultarTipoAnimalCompleto}/> 
                <Stack.Screen name='ActualizarPersonal' component={ActPersonalInic}/> 
                <Stack.Screen name='ActualizarAlimAnimAdmin' component={ActAlimAnimalAdminInic}/> 
                <Stack.Screen name='ActualizarAlimVenta' component={ActAlimVentaInic}/> 
                <Stack.Screen name='RegTipoAnim' component={TipoAnimalInic}/> 
                <Stack.Screen name='RegAnimal' component={AnimalInic}/> 
                <Stack.Screen name='ConsClientesCompl' component={ConsultarClientesCompleto}/> 
                <Stack.Screen name='ActCliente' component={ActClienteInic}/> 
                <Stack.Screen name='ConsClienteAdmin' component={ConsClientesAdminInic}/> 
                <Stack.Screen name='ConsAlimVentaAdmin' component={ConsAlimVentaAdminInic}/> 
                <Stack.Screen name='ConsMatPrimAdmin' component={ConsultarMateriaPrimaAdmin}/> 
                <Stack.Screen name='ConsMatPrimPersonal' component={ConsultarMateriaPrimaPersonal}/> 
                <Stack.Screen name='ActDireccion' component={ActDireccionInic}/> 
                <Stack.Screen name='ActProveedor' component={ActProveedorInic}/> 
                <Stack.Screen name='ConsAlimVenComp' component={ConsultarAlimVentaCompleto}/> 
                <Stack.Screen name='Reporte1' component={ConsultarReporte1}/> 
                <Stack.Screen name='Reporte2' component={ConsultarReporte2}/> 
                <Stack.Screen name='Reporte3' component={ConsultarReporte3}/> 
                <Stack.Screen name='Reporte4' component={ConsultarReporte4}/> 
                <Stack.Screen name='Reporte5' component={ConsultarReporte5}/>
                <Stack.Screen name='Reporte6' component={ConsultarReporte6}/> 
                <Stack.Screen name='Reporte7' component={ConsultarReporte7}/> 
                <Stack.Screen name='Reporte8' component={ConsultarReporte8}/> 
                <Stack.Screen name='Reporte9' component={ConsultarReporte9}/> 
                <Stack.Screen name='Reporte10' component={ConsultarReporte10}/> 
                <Stack.Screen name='Reporte11' component={ConsultarReporte11}/> 
                <Stack.Screen name='Reporte12' component={ConsultarReporte12}/> 
                <Stack.Screen name='ConsProvId' component={ConsProveedorAdminInic}/> 
                <Stack.Screen name='ConsProvComp' component={ConsultarProveedorCompleto}/> 

                
                
                
            </Stack.Navigator>
        </NavigationContainer>

    )


}

export default App
