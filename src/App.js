
// import './App.css';
import {useReducer, useEffect, useState} from "react"
import {reducer, initialState} from './store';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import { createProducts } from "./faker";

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from "./components/Layout";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);


  
  useEffect(() => {
    !state.productsLoaded && dispatch({type: 'getProducts', payload:createProducts(10)})
    },[state.productsLoaded])
  


  return (
    <BrowserRouter>
      <Layout>
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/products' element={<Products products={state.products}/>}/>

          </Routes>
        </Layout>
    </BrowserRouter>
  );
}

export default App;