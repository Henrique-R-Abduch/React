import React, { Component } from 'react';
import Header from './Header';
import Products from './ProductList';
import ShoppingCart from './Cart';
import Contact from './Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Products />
        <ShoppingCart />
        <Contact />
      </div>
    );
  }
}

export default App;
