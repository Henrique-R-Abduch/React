import React from 'react';
import './Header.css';

function Header() {
  return (
    <header>
      <div className="logo">
        <img src="logosite.jpg" alt="Logo da Loja" />
        <h1>Nome da Loja</h1>
      </div>
      <nav>
        <ul>
          <li><a href="#">Produtos</a></li>
          <li><a href="#">Contato</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
