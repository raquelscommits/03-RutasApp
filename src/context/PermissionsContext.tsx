import React, { createContext, useEffect, useState } from 'react';
import { AppState, Platform } from 'react-native';
import { check, PERMISSIONS, PermissionStatus, request, openSettings } from 'react-native-permissions';

// Definición de la interfaz que describe el estado de los permisos
export interface PermissionsState {
    locationStatus: PermissionStatus;
}

// Estado inicial de los permisos
export const permissionInitState: PermissionsState = {
    locationStatus: 'unavailable',
}

// Definición de las propiedades que estarán disponibles en el contexto de permisos
type PermissionsContextProps = {
    permissions: PermissionsState;
    askLocationPermission: () => void;
    checkLocationPermission: () => void;
}

// Creación del contexto de permisos
export const PermissionsContext = createContext({} as PermissionsContextProps ); 

// Componente proveedor de contexto de permisos
export const PermissionsProvider = ({ children }: any ) => {

    // Estado local que almacena la información de los permisos
    const [permissions, setPermissions] = useState( permissionInitState );

    // Efecto que se ejecuta al cambiar el estado de la aplicación
    useEffect(() => {
        AppState.addEventListener('change', state => {
            // Verifica la ubicación solo cuando la aplicación vuelve a estar activa
            if ( state !== 'active' ) {
                return;
            }
            checkLocationPermission();
        });
    }, [])

    // Función para solicitar permisos de ubicación
    const askLocationPermission = async () => {
        let permissionStatus: PermissionStatus;

        // Determina la plataforma y solicita los permisos correspondientes
        if ( Platform.OS === 'ios' ) {
            permissionStatus = await request( PERMISSIONS.IOS.LOCATION_WHEN_IN_USE );
        } else {
            permissionStatus = await request( PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION );
        }

        // Abre la configuración si los permisos están bloqueados
        if ( permissionStatus === 'blocked' ) {
            openSettings();
        }

        // Actualiza el estado de los permisos
        setPermissions({
            ...permissions,
            locationStatus: permissionStatus
        });
    };

    // Función para verificar el estado actual de los permisos de ubicación
    const checkLocationPermission = async () => {
        let permissionStatus: PermissionStatus;

        // Determina la plataforma y verifica los permisos correspondientes
        if ( Platform.OS === 'ios' ) {
            permissionStatus = await check( PERMISSIONS.IOS.LOCATION_WHEN_IN_USE );
        } else {
            permissionStatus = await check( PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION );
        }

        // Actualiza el estado de los permisos
        setPermissions({
            ...permissions,
            locationStatus: permissionStatus
        });
    };

    return (
        <PermissionsContext.Provider value={{
            permissions,
            askLocationPermission,
            checkLocationPermission,
        }}>
            { children }
        </PermissionsContext.Provider>
    );
};


