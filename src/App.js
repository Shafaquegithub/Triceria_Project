import "./App.css";
import FoodContainer from "./components/FoodContainer";
import MenuBar from "./components/MenuBar";
import MyOrder from "./components/MyOrder";
import { Routes, Route } from "react-router-dom";
import MyCart from "./components/MyCart";
import React from "react";

function App() {
  return (
    <section className="app-section">
      <div
      id="App"
        className="App"
      >
        <MenuBar />
        <Routes>
          <Route path="/" element={<FoodContainer />} />
          <Route path="/myCart" element={<MyCart />} />
        </Routes>
        <MyOrder />
      </div>
    </section>
  );
}

export default App;
