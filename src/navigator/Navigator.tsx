import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { MapScreen } from '../pages/MapScreen';
import { PermissionsScreen } from '../pages/PermissionsScreen';
import { PermissionsContext } from '../context/PermissionsContext';
import { LoadingScreen } from '../pages/LoadingScreen';

// Crea un stack navigator de React Navigation
const Stack = createStackNavigator();

// Componente Navigator que define la estructura de la navegación
export const Navigator = () => {

    const { permissions } = useContext(PermissionsContext);

    if ( permissions.locationStatus === 'unavailable') {
        return <LoadingScreen/>;
    }

  return (
    // Configuración del Stack Navigator
    <Stack.Navigator
      screenOptions={{
        headerShown: false, // Oculta la barra de navegación por defecto
        cardStyle: {
          backgroundColor: 'white', // Fondo blanco para las transiciones de pantalla
        },
      }}
    >

      {
        ( permissions.locationStatus === 'granted')
        ? <Stack.Screen name="MapScreen" component={MapScreen} />
        : <Stack.Screen name="PermissionsScreen" component={PermissionsScreen} />
      }

    </Stack.Navigator>
  );
};
