/* eslint-disable @typescript-eslint/no-unused-vars */
// Desactiva la advertencia de variables no utilizadas para este archivo

import React from 'react';
import { Button, Platform, StyleSheet, Text, View } from 'react-native';
import { check, PERMISSIONS, PermissionStatus, request } from 'react-native-permissions';

export const PermissionsScreen = () => {
  // Función para verificar y solicitar permisos de ubicación en Android
  const checkLocationPermission = async () => {
    let permissionStatus: PermissionStatus;

    if (Platform.OS === 'android') {
      // Solicita el permiso de ubicación fina en Android y obtiene el estado del permiso
      permissionStatus = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
    }

    // Manejar el resultado de la solicitud de permisos
    if (permissionStatus === 'granted') {
        console.log('Permiso de ubicación concedido');
    } else {
        console.log('Permiso de ubicación no concedido');
    }
  };

  return (
    <View style={styles.container}>
      <Text>PermissionsScreen</Text>

      {/* Botón que llama a la función para verificar y solicitar permisos de ubicación */}
      <Button
        title="Permiso"
        onPress={checkLocationPermission}
      />
    </View>
  );
};

// Estilos para el componente
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});