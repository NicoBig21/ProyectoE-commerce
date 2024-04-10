import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Productos, Detalle, SearchPage } from "../pages";

export default function ComponentPc() {

    return (
        <Routes>
            <Route path="search" element={<SearchPage />} />       
            <Route path="productos" element={<Productos />} />
            <Route path="productos/:id" element={<Detalle />} />
        </Routes>
    );
};

