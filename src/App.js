import React, { useEffect } from 'react'
import PizzaCard from './container/PizzaCard';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Cart from './container/Cart';

export default function App(props) {
  useEffect(() => {
    const response = props.pizzaList();
  }, []);
  // console.log("nvjc", props.pizza)
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<PizzaCard details={props.pizza}/>} />
        </Routes>
        <Routes>
          <Route exact path='/cart' element={<Cart details={props.pizza}/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
