
// import './App.css';
import {useReducer} from "react"
import {reducer, initialState} from './store';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products'

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  

  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/products' element={<Products dispatch={dispatch}/>}/>

        </Routes>
    </BrowserRouter>
  );
}

export default App;
