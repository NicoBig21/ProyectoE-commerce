import { types } from "../types/types";

export const authReducer = (state = {}, action) => {
    switch (action.type) {
        case types.iniciar:
            return {
                ...state,
                logged: true, // Cambia de `iniciar` a `logged`
                user: action.payload
            };

        case types.cerrar:
            return {
                logged: false,
                user: null // Asegúrate de eliminar el usuario al cerrar sesión
            };

        default:
            return state;
    }
}