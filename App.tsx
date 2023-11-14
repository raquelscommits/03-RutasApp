import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { Navigator } from './src/navigator/Navigator';
import { PermissionsProvider } from './src/context/PermissionsContext';


const AppState = ({children}: any) =>{
  return (
    <PermissionsProvider>
      { children }
    </PermissionsProvider>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <AppState>
        <Navigator/>
      </AppState>
    </NavigationContainer>
  );
}
