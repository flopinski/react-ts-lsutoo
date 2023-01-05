import * as React from 'react';
import Menu from './Menu';

function Layout({ children }) {
  return (
    <section className="layout-section">
      <header>
        <Menu />
      </header>
      <main>{children}</main>
      <footer>
        All rights reserved. <span>2022</span>
      </footer>
    </section>
  );
}

export default Layout;
