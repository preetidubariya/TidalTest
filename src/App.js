import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AgriInputMaster from './AgriInputMaster';
import SupplierMaster from './SupplierMaster';
import AgriInputPurchase from './AgriInputPurchase';
import taxMaster from './taxMaster';


// Scripts
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
// Styles
import 'bootstrap/dist/css/bootstrap.min.css';



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
