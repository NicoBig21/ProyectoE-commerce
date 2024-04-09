import { useState } from 'react';

export const useCart = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems(prevCartItems => {
      // Creamos una copia del estado actual del carrito
      const updatedCart = [...prevCartItems];
      // Agregamos el nuevo producto a la copia del carrito
      updatedCart.push(product);
      console.log('Nuevo estado del carrito:', updatedCart);
      return updatedCart;
    });
  };

  console.log('Estado actual del carrito:', cartItems);

  return { cartItems, addToCart };
};
