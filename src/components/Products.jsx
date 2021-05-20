import React, { useContext, useEffect, useState } from 'react';
import Product from './Product';
import '../styles/components/Products.css';
import AppContext from '../context/AppContext';
import Axios from 'axios'
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

  const { state, addToCart } = useContext(AppContext);
  const { products } = state;

  const handleToAddCart = (product) => () => {
    addToCart(product);
  };

  console.log(data)
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
      </div>
    </>
  );
};

export default Products;
