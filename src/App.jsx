import AppRouter from "./router/AppRouter";
import { AuthProvider } from "./auth/context/index"; 
import { PokemonProvider } from "./context/PokemonProvider";

export default function App() {
    return (
        <>
            <AuthProvider>
                    <PokemonProvider>
                        <AppRouter/>
                    </PokemonProvider>
            </AuthProvider>
        </>
    )
}


// Tipos de "Export"
// 1. Cuando sabes que solo vas a exporar una sola cosa "ednf" -> export (e) default (d) name (n) function (f)
// 2. Cuando sabes que vas a exportar varias cosas "ednf" -> export (e) name (n) function (f)

// Tipos de "Import"
// 1. Cuando no esta el "default" se importa con llaves "{}", caso contrario no se usa. Ejemplo: 
// import AppRouter from "./router/AppRouter"
// import {AppRouter} from "./router/AppRouter"