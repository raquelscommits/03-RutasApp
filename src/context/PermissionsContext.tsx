/* eslint-disable react/react-in-jsx-scope */
// Desactiva la advertencia de react/react-in-jsx-scope, ya que no está usando React directamente en este archivo.

import { createContext, useState } from "react";
import { PermissionStatus } from "react-native";

// Interfaz que define el estado de los permisos
export interface PermissionsState {
    locationStatus: PermissionStatus;
}

// Estado inicial de los permisos
export const permissionInitState: PermissionsState = {
    locationStatus: 'denied',
};

// Definición de las propiedades que estarán disponibles en el contexto de permisos
type PermissionsContextProps = {
    permissions: PermissionsState;
    askLocationPermission: () => void;
    checkLocationPermission: () => void;
}

// Creación del contexto de permisos
export const PermissionsContext = createContext({} as PermissionsContextProps);

// Funciones vacías para solicitar y verificar permisos de ubicación
const askLocationPermission = () => {
}
const checkLocationPermission = () => {
}

// Componente proveedor de contexto de permisos
export const PermissionsProvider = ({ children }: any) => {

    // Estado local que almacena la información de los permisos
    const [permissions, setPermissions] = useState(permissionInitState);

    return (
        <PermissionsContext.Provider value={{
            permissions,
            checkLocationPermission,
            askLocationPermission,
        }}>
            { children }
        </PermissionsContext.Provider>
    );
};

