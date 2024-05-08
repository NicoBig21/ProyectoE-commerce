import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom'; 
import { Contacto, Detalle, Home, PageNotFound, Pokemons, SearchPage, Carrito, Profile } from '../view/pages';
import { LoginPage } from '../auth/pages/LoginPage';
import RegisterPage from '../auth/pages/RegisterPage';
import Navbar from '../components/Navbar'; 

export default function AppRouter() {
    const location = useLocation();
    const showNavbar = !location.pathname.includes('/login');
    const showNavbar2 = !location.pathname.includes('/register');
    
    return ( 
        <>
            {showNavbar && showNavbar2 && <Navbar />}

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='login' element={<LoginPage />} />
                <Route path='signup' element={<RegisterPage />} />
                <Route path='pokemon' element={<Pokemons />} />
                <Route path='pokemon/:id' element={<Detalle />} />
                <Route path='search' element={<SearchPage />} />
                <Route path='contacto' element={<Contacto />} />
                <Route path='carrito' element={<Carrito />} />
                <Route path='profile' element={<Profile />} />
                <Route path='*' element={<PageNotFound />} />
            </Routes>
        </>
    );
}
