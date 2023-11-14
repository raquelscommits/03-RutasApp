/* eslint-disable @typescript-eslint/no-unused-vars */
// Desactiva la advertencia de variables no utilizadas para este archivo

import React, { useContext } from 'react';
import { Button, Platform, StyleSheet, Text, View } from 'react-native';
import { check, PERMISSIONS, PermissionStatus, request } from 'react-native-permissions';
import { PermissionsContext } from '../context/PermissionsContext';

export const PermissionsScreen = () => {

  const { permissions } = useContext( PermissionsContext );

  // Función para verificar y solicitar permisos de ubicación en Android
  const checkLocationPermission = async () => {

  };

  return (
    <View style={styles.container}>
      <Text>PermissionsScreen</Text>

      {/* Botón que llama a la función para verificar y solicitar permisos de ubicación */}
      <Button
        title="Permiso"
        onPress={checkLocationPermission}
      />

      <Text>
        { JSON.stringify(permissions, null, 5)}
      </Text>
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