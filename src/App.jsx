import AppRouter from "./router/AppRouter";
import { Navbar } from "./components";

export default function App() {
    return (
        <>
        {/* TODO: Arreglar para que el "Navbar" y el "div" no aparezcan en el "Login" y ademas que no se viole el "Princio de Responsabilidad Unica". *Usar hook* */}
        {/* TODO: Implementar casos para todos los hooks */}
        {/* TODO: Que el carrito no sea un pop-up sino que sea una pagina aparte y que este en "page" */}
        {/* TODO: Meter componentes de MUI */}
            <Navbar/> 
            <div className="container">
                <AppRouter/>
            </div>
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