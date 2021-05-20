import React, { useContext } from 'react';
import '../styles/components/Header.css';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';
import {AiOutlineShoppingCart} from 'react-icons/ai'
const Header = () => {
  const { state } = useContext(AppContext);
  const { cart } = state;
  return (
    <div className="Header">
      <h1 className="Header-title">
        <Link to="/">Venta de verduras y frutas</Link>
      </h1>
      <div className="Header-checkout">
        <Link to="/checkout">
          <i><AiOutlineShoppingCart/></i>
        </Link>
        Productos en el carrito: 
        {cart.length > 0 && <div ><h3>{cart.length}</h3></div>}
        
      </div>
    </div>
  );
};

export default Header;
