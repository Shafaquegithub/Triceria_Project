import "./App.css";
import FoodContainer from "./components/FoodContainer";
import MenuBar from "./components/MenuBar";
import MyOrder from "./components/MyOrder";
import { Routes, Route, useNavigate } from "react-router-dom";
import MyCart from "./components/MyCart";
import React, { createContext, useReducer, useState } from "react";
import { foodData, cartData } from "./components/Data";
import reducer from "./components/reducer";



export const allData = createContext()
const initialState = {
  item: foodData,
  totalAmount: 0
}
const cartItem = {
  cartItem:cartData
}

function App() {

  const navigate = useNavigate()
  const [foodData, setState] = useState(initialState)
  const [cartState, dispatch] = useReducer(reducer, cartItem)

  const incNumber = (id) =>{
    return dispatch(
      {
        type: "INCREMENT",
        payload: id
      }
    ) 
  }
  const dcrNumber=(id)=>{
    return dispatch(
      {
        type:"DECREMENT",
        payload: id
      }
    )
  }
  const delData = (id)=>{
    return dispatch(
      {
        type: "DELETE",
        payload: id
      }
    )
  }

  const addToCart = (id)=>{
    let addingData = foodData.item.find((item)=>{
      return item.id == id
    })
    cartState.cartItem.push(addingData)
    setTimeout(()=>{
      navigate("/myCart")
    }, 300)
  }
  return (
    <section className="app-section">
      <div
      id="App"
        className="App"
      >
        <allData.Provider value={{...foodData, ...cartState, incNumber, dcrNumber, delData, addToCart}}>
        <MenuBar />
        <Routes>
          <Route path="/" element={<FoodContainer />} />
          <Route path="/myCart" element={<MyCart />} />
        </Routes>
        <MyOrder />
        </allData.Provider>
      </div>
    </section>
  );
}

export default App;
