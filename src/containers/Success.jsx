import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import '../styles/components/Success.css';

const Success = () => {
  const { state } = useContext(AppContext);
  const { buyer } = state;
  console.log(state);
  return (
    <div className="Success">
      <div className="Success-content">
        <h2>{`${buyer[0].name}, gracias por tu compra`}</h2>
        <span>Tu pedido llegará en 3 días a tu dirección</span>
      </div>
    </div>
  );
};
export default Success;
