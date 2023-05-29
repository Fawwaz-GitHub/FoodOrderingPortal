import './index.css';
import React,{useState,useEffect} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import axios from "axios";
import Burger from './components/Burger';
import Cart from './components/Cart';
import Header from './components/Header';
import Home from './components/Home';
import Pizza from './components/Pizza';
import { food } from './data/foods';

export const foodContext = React.createContext();
const url = "http://fod-app.herokuapp.com/food"

function App() {

  let [data, setData] = useState([])
  let [cart, setCart] = useState([])
  let [cartvalue, setCartvalue] = useState(cart.length)

  useEffect(()=>{
    getData();
  },[])

  let getData = async() => {
    // let res = await axios.get(url);
    // console.log(res.data)
    setData(food)
  }

  return <>
  <BrowserRouter>
    <foodContext.Provider value={{data,cart,setCart,cartvalue,setCartvalue}}>
      <Header/>
      <Routes>
        <Route path='/pizza' element={<Pizza/>}/>
        <Route path='/burger' element={<Burger/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </foodContext.Provider>
  </BrowserRouter>
  </>
}

export default App;
