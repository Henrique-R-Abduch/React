import React from 'react';
import './Cart.css';

function Cart() {
  return (
    <section>
      <h2>Carrinho de Compras</h2>
      <ul className="cart-list">
        <li>
          <img src="caminho/para/produto1.png" alt="Produto 1" />
          <div>
            <h3>Produto 1</h3>
            <span className="price">R$ 99,99</span>
            <span className="quantity">Quantidade: 1</span>
          </div>
          <button className="remove-item">Remover</button>
        </li>
        <li>
          <img src="caminho/para/produto2.png" alt="Produto 2" />
          <div>
            <h3>Produto 2</h3>
            <span className="price">R$ 149,99</span>
            <span className="quantity">Quantidade: 2</span>
          </div>
          <button className="remove-item">Remover</button>
        </li>
      </ul>
      <div className="cart-total">
        <h3>Total do Carrinho: R$ 399,97</h3>
        <button className="checkout-button">Finalizar Compra</button>
      </div>
    </section>
  );
}

export default Cart;