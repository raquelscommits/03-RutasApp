/* eslint-disable react-native/no-inline-styles */

// Importa las bibliotecas necesarias de React y react-native
import React from 'react';
import { ActivityIndicator, View } from 'react-native';

// Define el componente funcional LoadingScreen
export const LoadingScreen = () => {
  return (
    // Renderiza un contenedor de vista con estilo flex, centrado tanto vertical como horizontalmente
    <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>

      {/* Muestra un indicador de actividad con tamaño 50 y color negro */}
      <ActivityIndicator
        size={50}
        color="black"
      />

    </View>
  );
};

