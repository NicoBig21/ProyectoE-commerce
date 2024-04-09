import { createContext, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const { cartItems, addToCart } = useCart();

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};