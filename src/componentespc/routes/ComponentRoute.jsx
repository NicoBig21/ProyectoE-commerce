import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Navbar } from "../../ui";
import { Fuente, Home, PlacaBase, Procesador, Productos, SearchPage } from "../pages";

export const ComponentRoute = () => {

  return (
    <>
      <Navbar/> {/* Pasa la función addToCart como una prop al componente Navbar */}
      <div className='container'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="fuente" element={<Fuente />} />
          <Route path="placa" element={<PlacaBase />} />
          <Route path="procesador" element={<Procesador />} />
          <Route path="search" element={<SearchPage />} />       
          {/* Pasa la función addToCart como una prop al componente Productos */}
          <Route path="productos/:id" element={<Productos />} />
          <Route path='/' element={<Navigate to="/home"/>}/>
        </Routes>
      </div>
    </>
  );
};

