/* eslint-disable react/react-in-jsx-scope */
import { createContext, useState } from "react";
import { PermissionStatus } from "react-native";

export interface PermissionsState {
    locationStatus: PermissionStatus;
}

// Estado inicial
export const permissionInitState: PermissionsState = {
    locationStatus: 'denied',
};

type PermissionsContextProps = {
    permissions: PermissionsState
    askLocationPermission: () => void;
    checkLocationPermission: () => void;
}

export const PermissionsContext = createContext({} as PermissionsContextProps);

    const askLocationPermission = () => {

    }

    const checkLocationPermission = () => {

    }




export const PermissionsProvider = ({ children }: any) => {

    const [permissions, setPermissions] = useState(permissionInitState)

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
