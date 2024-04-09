import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Navbar } from "../../ui";
import { Fuente, Home, PlacaBase, Procesador, Productos, SearchPage } from "../pages";
import { useCart } from '../../ui/hooks/useCart'; // Importa el hook useCart

export const ComponentRoute = () => {
  const { cartItems, addToCart } = useCart(); // Usa el hook useCart para obtener el estado del carrito y la función addToCart

  console.log("Cart Items:", cartItems); // Agrega este console.log para verificar el estado de cartItems

  return (
    <>
      <Navbar handleAddToCart={addToCart} /> {/* Pasa la función addToCart como una prop al componente Navbar */}
      <div className='container'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="fuente" element={<Fuente />} />
          <Route path="placa" element={<PlacaBase />} />
          <Route path="procesador" element={<Procesador />} />
          <Route path="search" element={<SearchPage />} />       
          {/* Pasa la función addToCart como una prop al componente Productos */}
          <Route path="productos/:id" element={<Productos handleAddToCart={addToCart} />} />
          <Route path='/' element={<Navigate to="/home"/>}/>
        </Routes>
      </div>
    </>
  );
};

