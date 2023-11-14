/* eslint-disable @typescript-eslint/no-unused-vars */
// Desactiva la advertencia de variables no utilizadas para este archivo
import React, { useContext } from 'react';
import { Button, Platform, StyleSheet, Text, View } from 'react-native';
import { check, PERMISSIONS, PermissionStatus, request } from 'react-native-permissions';
import { PermissionsContext } from '../context/PermissionsContext';
import { BlackButton } from '../components/BlackButton';

export const PermissionsScreen = () => {

  const { permissions, askLocationPermission } = useContext( PermissionsContext );

  // Función para verificar y solicitar permisos de ubicación en Android
  const checkLocationPermission = async () => {

  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>PermissionsScreen</Text>

      {/* Botón que llama a la función para verificar y solicitar permisos de ubicación */}
      <BlackButton
        title="Permiso"
        onPress={checkLocationPermission}
      />

      <Text style={{ marginTop: 20 }}>
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
  },
  title: {
    width: 250,
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
});
