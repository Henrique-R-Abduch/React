import React from 'react';
import Header from './Header';
import ProductList from './ProductList';
import Cart from './Cart';
import Footer from './Footer';

function Store() {
  return (
    <div>
      <Header />
      <ProductList />
      <Cart />
      <Footer />
    </div>
  );
}

export default Store;