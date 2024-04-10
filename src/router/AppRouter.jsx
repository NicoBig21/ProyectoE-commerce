import { Routes, Route } from "react-router-dom";
import { LoginPage } from '../auth/pages/LoginPage'
import ComponentPc from "../componentes_pc/routes/ComponentPc";
import { Home, PageNotFound } from "../componentes_pc/pages";

export default function AppRouter() {
    return (
        <Routes>

            <Route path="/" element={<Home/>}/>

            <Route path="login" element={<LoginPage/>}/>

            <Route path="componentes-pc/*" element={<ComponentPc/>}/>

            {/* TODO: Buscar como hacer cuando la ruta es "componentes-pc/productos/saajdj" para que aparezca la "PageNotFound" */}
            <Route path="/*" element={<PageNotFound/>}/>

        </Routes>
    )
}
