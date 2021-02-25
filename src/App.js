import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AgriInputMaster from './AgriInputMaster';
import SupplierMaster from './SupplierMaster';
import AgriInputPurchase from './AgriInputPurchase';
import taxMaster from './taxMaster';

function App() {
  return (
    <>
      <Router class="p-5">
        <Navbar />
        <Switch>
          <Route exact path='/' component={AgriInputMaster} />
          <Route path='/SupplierMaster' component={SupplierMaster} />
          <Route path='/AgriInputPurchase' component={AgriInputPurchase} />
          <Route path='/taxMaster' component={taxMaster} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
