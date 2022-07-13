import React from 'react';
import './App.css';
import Navbar from './features/navbar/navbar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import ProductDetail from './features/product-detail/ProductDetail';
import ProductsList from './features/products/products';

function App() {
  return (
    <Router>
      <div>
      <Navbar/>
      <div className="content">
        <Routes>
          <Route path='/product/:id' element={<ProductDetail/>}></Route>
          <Route path='/' element={<ProductsList/>}></Route>
        </Routes>
      </div>
    </div>
    
    </Router>
  );
}

export default App;
