import React from 'react';
import { Routes, Route } from 'react-router-dom'; 
import { Detalle, Home, PageNotFound, Productos, SearchPage } from '../componentes_pc/pages';
import { Navigation } from '../components/Navigation';

export default function AppRouter() {
    return ( 
    <Routes>
        <Route path='pokemon' element={<Navigation />}>
            <Route path="home" element={<Home />} />
            <Route path="pokemon" element={<Productos />} />
            <Route path="pokemon/:id" element={<Detalle />} />
            <Route path="search" element={<SearchPage />} />
        </Route>
            <Route path="*" element={<PageNotFound />} />
    </Routes>
    )
}
