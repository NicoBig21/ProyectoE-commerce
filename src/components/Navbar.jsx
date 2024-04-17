import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import Carrito from './Carrito';

export default function Navbar() {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  const onLogout = () => {
    navigate('/login', {
      replace: true
    });
  };

  const handleAddToCart = (producto) => {
    setCartItems([...cartItems, producto]); // Agrega el producto al carrito
    console.log('Producto agregado al carrito:', producto);
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
      <Link className="navbar-brand" to="/">CCP</Link>

      <div className="navbar-collapse">
        <div className="navbar-nav">
          <NavLink className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`} to={`/`}>Home</NavLink>
          <NavLink className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`} to={`/pokemon`}>Pokemons</NavLink>
        </div>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
        <ul className="navbar-nav ml-auto">
          <div className='nav-item nav-link' onClick={toggleCart}>
            <FaShoppingCart size={20} />
          </div>
          <li className='nav-item nav-link text-primary'>
            Usuario
          </li>
          <button
            className='nav-item nav-link btn'
            onClick={onLogout}
          >
            Logout
          </button>
        </ul>
      </div>

      {/* Renderiza el componente Carrito si showCart es true */}
      {showCart && <Carrito cartItems={cartItems} onClose={toggleCart} />}
    </nav>
  );
};
