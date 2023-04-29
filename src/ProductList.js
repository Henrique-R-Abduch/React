import React from 'react';
import './ProductList.css';

function ProductList() {
  return (
    <section>
      <h2>Produtos</h2>
      <div className="products-list">
        <div className="product">
          <img src="caminho/para/produto1.png" alt="Produto 1" />
          <h3>Produto 1</h3>
          <p>Descrição do Produto 1</p>
          <span className="price">R$ 99,99</span>
        </div>
        <div className="product">
          <img src="caminho/para/produto2.png" alt="Produto 2" />
          <h3>Produto 2</h3>
          <p>Descrição do Produto 2</p>
          <span className="price">R$ 149,99</span>
        </div>
        <div className="product">
          <img src="caminho/para/produto3.png" alt="Produto 3" />
          <h3>Produto 3</h3>
          <p>Descrição do Produto 3</p>
          <span className="price">R$ 199,99</span>
        </div>
      </div>
    </section>
  );
}

export default ProductList;