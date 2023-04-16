import React from 'react';
import logo from '../../../src/logo.svg';

function Header() {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="Logo"/>
      </div>
      <nav>
        <ul>
          <li><a href="/">Finance</a></li>
          <li><a href="/about">Fitness</a></li>
          <li><a href="/contact">Math</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
