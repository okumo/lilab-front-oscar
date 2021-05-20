import React from 'react';
const Product = ({ product, handleToAddCart }) => {
          const API = `http://localhost:3000/`;

          return (
    <>
      <div className="Products-item">
        <img src={`${API}/${product.imagen}`} alt={product.descripcion} />
        <div className="Product-item-info">
          <h2>
            {product.descripcion} {" - "}
            <span>{product.price} $</span>
          </h2>
          <p>{product.description}</p>
        </div>
        <button type="button" onClick={handleToAddCart(product)}>
          Comprar
        </button>
       
      </div>
    </>
  );
};
export default Product;
