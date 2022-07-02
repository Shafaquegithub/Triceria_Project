import React from "react";
import "./MyCart.css";
import { HiMinusSm, HiPlusSm } from "react-icons/hi";
import { ImCross } from "react-icons/im";
import { Link } from "react-router-dom";
import { allData } from "../App";
import { useContext } from "react";

function MyCart() {
  const {cartItem, incNumber, dcrNumber, delData} = useContext(allData);
  const total = ()=>{
    let priceTotal = 0;
    cartItem.map((item)=>{
      priceTotal += (item.amount * item.price)    
    })
    return priceTotal
  }
 let finalPrice = total()

  return (
    <>
      <div className="cart-parent">
        <h2 style={{margin:"30px auto 50px"}}>My Cart items</h2>
        {cartItem.slice(-5).reverse().map(({ id, title, weight, price, amount }) => (
          <div className="myorder-cart-div" key={id}>
            <img src={require(`../image/img${id}.png`)} alt="" />
            <p>
              {title} <br />
              <span>{weight}</span>
            </p>
            <h4 className="cart-plus-minus-div">
              <span  onClick={()=>dcrNumber(id)}>
                <HiMinusSm />
              </span>
              <span>{amount}</span>
              <span onClick={()=>incNumber(id)}>
                <HiPlusSm />
              </span>
            </h4>
            <h4 className="cart-price-div">${(price * amount).toFixed(2)}</h4>
            <span>
              <ImCross style={{ fontSize: "10px", color: "gray" }}  onClick={()=>delData(id)} />
            </span>
          </div>
        ))}
        <h4 className="cart-total">
            <span>Total</span>
            <span>{finalPrice.toFixed(2)}</span>
          </h4>
        <div className="btn-div">
          <button className="btn btn-order">Order Now</button>
          <Link to="/">
            <button className="btn btn-home">Go Home</button>
          </Link>{" "}
        </div>
      </div>
    </>
  );
}

export default MyCart;
