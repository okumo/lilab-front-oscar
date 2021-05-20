import React, { useRef, useContext, useState } from 'react';
import '../styles/components/Information.css';
import { Link, useHistory } from 'react-router-dom';
import AppContext from '../context/AppContext';
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap'
import initialState from '../initialState'
import Axios from 'axios'

const Information = ({ history }) => {
            const API = `http://localhost:3000`;

  const historia = useHistory()
    const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const { state, addToBuyer, setstate} = useContext(AppContext);
  const form = useRef(null);

  const { cart } = state;

  const handleSubmit = () => {
    const formData = new FormData(form.current);
    const buyer = {
      name: formData.get('name'),
      email: formData.get('email'),
    };
    addToBuyer(buyer);
    setModal(true)
  };

  function goToHome(params) {
    setstate(initialState)
    setModal(false)
    Axios.put(`${API}/updateProducts`,cart).then(response=>console.log(response)).catch(err=>console.log(err))
    historia.push('/')
  }
  return (
    <div className="Information">
      <div className="Information-content">
        <div className="Information-head">
          <h2>Información de contacto:</h2>
        </div>
        <div className="Information-form">
          <form ref={form}>
            <input type="text" placeholder="Nombre completo" name="name" />
            <input type="text" placeholder="Correo Electronico" name="email" />
          </form>
        </div>
        <div className="Information-buttons">
          <Link to="/checkout">
            <div className="Information-back">Regresar</div>
          </Link>
          <div className="Information-next">
            <button type="button" onClick={handleSubmit}>
              Pagar
            </button>
          </div>
        </div>
      </div>
      <div className="Information-sidebar">
        <h3>Pedido:</h3>
        {cart.map((item, index) => (
          <div className="Information-item" key={index}>
            <div className="Information-element">
              <h4>{item.descripcion}</h4>
              <span>${item.price}</span>
            </div>
          </div>
        ))}
      </div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Status de Compra</ModalHeader>
        <ModalBody>
          Muchas gracias! Compra satisfactoria, tu pedido llegará en 3 días a tu casa.
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={()=>goToHome()}>Aceptar</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};
export default Information;
