import React from 'react';
import { Routes, Route } from 'react-router-dom'; 
import { Detalle, Home, PageNotFound, Pokemons, SearchPage } from '../view/pages';

export default function AppRouter() {
    return ( 
    <Routes>
            <Route path="/" element={<Home />} />
            <Route path="pokemon" element={<Pokemons />} />
            <Route path="pokemon/:id" element={<Detalle />} />
            <Route path="search" element={<SearchPage />} />
            <Route path="*" element={<PageNotFound />} />
    </Routes>
    )
}
