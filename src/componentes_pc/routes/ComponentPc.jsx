import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Productos, Detalle, SearchPage, PageNotFound } from '../pages';

export default function ComponentPc() {
    return (
        <Routes>
            <Route path="search" element={<SearchPage />} />
            <Route path="productos" element={<Productos />} />
            <Route path="productos/:id" element={<Detalle />} />
            {/* Ruta comodín para manejar cualquier otra ruta */}
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    );
}
