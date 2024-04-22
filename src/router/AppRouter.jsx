import React from 'react';
import { Routes, Route } from 'react-router-dom'; 
import { Contacto, Detalle, Home, PageNotFound, Pokemons, SearchPage, Carrito } from '../view/pages';
import { LoginPage } from '../auth/pages/LoginPage';

export default function AppRouter() {
    return ( 
    <Routes>
            <Route path='/' element={<Home />} />
            <Route path='login' element={<LoginPage />} />
            <Route path='pokemon' element={<Pokemons />} />
            <Route path='pokemon/:id' element={<Detalle />} />
            <Route path='search' element={<SearchPage />} />
            <Route path='contacto' element={<Contacto />} />
            <Route path='carrito' element={<Carrito />} />
            <Route path='*' element={<PageNotFound />} />
    </Routes>
    )
}
