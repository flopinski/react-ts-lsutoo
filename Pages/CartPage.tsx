import * as React from 'react';
import Layout from '../Layout/Layout';

function CartPage() {
  return (
    <Layout>
      <h1 className="heading-cartPage">Cart Page</h1>
      <div>
        <p>Your cart is empty! Wanna buy something?</p>
      </div>
    </Layout>
  );
}

export default CartPage;
