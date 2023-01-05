import * as React from 'react';
import { Link } from 'wouter';

function Menu() {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/cart">Cart</Link>
    </nav>
  );
}

export default Menu;
