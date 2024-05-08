import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom'; 
import { Contacto, Detalle, Home, PageNotFound, Pokemons, SearchPage, Carrito, Profile } from '../view/pages';
import { LoginPage } from '../auth/pages/LoginPage';
import RegisterPage from '../auth/pages/RegisterPage';
import Navbar from '../components/Navbar'; 
import Footer from '../components/Footer';

export default function AppRouter() {
    const location = useLocation();
    const showNavbar = !['/login', '/signup'].includes(location.pathname);
    const hideFooter = ['/profile', '/carrito'].includes(location.pathname);

    return ( 
        <>
            {showNavbar && <Navbar />}
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='login' element={<LoginPage />} />
                <Route path='signup' element={<RegisterPage />} />
                <Route path='pokemon' element={<Pokemons />} />
                <Route path='pokemon/:id' element={<Detalle />} />
                <Route path='search' element={<SearchPage />} />
                <Route path='contacto' element={<Contacto />} />
                <Route path='profile' element={<Profile />} />
                <Route path='carrito' element={<Carrito />} />
                <Route path='*' element={<PageNotFound />} />
            </Routes>
            {!hideFooter && showNavbar && <Footer />}
        </>
    );
}

