import * as React from 'react';
import './style.css';
import { Route, Router, Switch } from 'wouter';
import CartPage from './Pages/CartPage';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/cart" component={CartPage} />
      </Switch>
    </Router>
  );
}