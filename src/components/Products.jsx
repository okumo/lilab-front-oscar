import React, { useContext, useEffect, useState } from 'react';
import Product from './Product';
import '../styles/components/Products.css';
import AppContext from '../context/AppContext';
import Axios from 'axios'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const Products = () => {
  const [data, setData] = useState([])
        const API = `http://localhost:3000/products`;
// eslint-disable-next-line
  useEffect(async() => {
          const response = await Axios(API);
          if(response.data){
            setData(response.data)
          }
  }, []);

              const [modal, setModal] = useState(false);
          const toggle = () => setModal(!modal);

  const { state,addToCart } = useContext(AppContext);
  const handleToAddCart = (product) => () => {
    let filteredProducts =state.cart.filter(element=>element.id===product.id)
    if(filteredProducts.length<=product.stock){
        addToCart(product);
    }else{
      setModal(true)
    }
  };

  return (
    <>
      <div className="Products">
        <div className="Products-items">
          {data.map((product) => (
            <Product
              key={product.id}
              product={product}
              handleToAddCart={handleToAddCart}
            />
          ))}
        </div>
         <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Alerta</ModalHeader>
        <ModalBody>
          Se agotó el stock
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Aceptar</Button>
        </ModalFooter>
      </Modal>
      </div>
    </>
  );
};

export default Products;
