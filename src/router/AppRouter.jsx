import { Routes, Route } from "react-router-dom";
import { LoginPage } from '../auth/pages/LoginPage'
import { ComponentRoute } from "../componentespc";

export const AppRouter = () => {
  return (
    <>

        <Routes>

            <Route path='login' element={<LoginPage/>}/>

            <Route path='/*' element={<ComponentRoute/>}/>

        </Routes>
    </>
  )
}
