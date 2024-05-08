import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function RegisterPage() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [dni, setDNI] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      username,
      email,
      dni,
      phone,
      address,
      password,
      confirmPassword
    };
    console.log(userData);
  };

  return (
    <div className='img-login'>
      <div className="card login-card">
        <h1 className="card-title mb-4">Registrarse</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Usuario</label>
            <input 
              type="text" 
              className="mt-1" 
              id="username" 
              placeholder="Ingrese su nombre de usuario" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group mt-3">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              className="mt-1" 
              id="email" 
              placeholder="Ingrese su mail" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group mt-3">
            <label htmlFor="dni">DNI</label>
            <input 
              type="text" 
              className="mt-1" 
              id="dni" 
              placeholder="Ingrese su dni" 
              value={dni}
              onChange={(e) => setDNI(e.target.value)}
              required
            />
          </div>
          <div className="form-group mt-3">
            <label htmlFor="phone">Numero</label>
            <input 
              type="text" 
              className="mt-1" 
              id="phone" 
              placeholder="Ingrese su numero de telefono" 
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div className="form-group mt-3">
            <label htmlFor="address">Direccion</label>
            <input 
              type="text" 
              className="mt-1" 
              id="address" 
              placeholder="Ingrese su direccion" 
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>
          <div className="form-group mt-3">
            <label htmlFor="password">Contraseña</label>
            <input 
              type="password" 
              className="mt-1" 
              id="password" 
              placeholder="Ingrese su contraseña" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group border-form mt-3">
            <label htmlFor="confirmPassword">Confirmar contraseña</label>
            <input 
              type="password" 
              className="mt-1" 
              id="confirmPassword" 
              placeholder="Confirma su contraseña" 
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <div className='mt-3'>
            <div className='forgot-password ml-4'>
              ¿Ya tienes cuenta?{' '}
              <Link to='/login'>
                <span>Iniciar sesion</span>
              </Link>
            </div>
          </div>
          
          <button type="submit" className="btn btn-danger btn-block mt-3">Register</button>

        </form>
      </div>
    </div>
  );
}
