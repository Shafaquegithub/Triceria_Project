import React from "react";
import "./MyCart.css";
import { HiMinusSm, HiPlusSm } from "react-icons/hi";
import { ImCross } from "react-icons/im";
import { cartData } from "./Data";
import { Link } from "react-router-dom";

function MyCart() {
  return (
    <>
      <div className="cart-parent">
        {cartData.map(({ id, title, weight, price }) => (
          <div className="myorder-cart-div" key={id}>
            <img src={require(`../image/img${id}.png`)} alt="" />
            <p>
              {title} <br />
              <span>{weight}</span>
            </p>
            <h4 className="cart-plus-minus-div">
              <span>
                <HiMinusSm />
              </span>
              <span>1</span>
              <span>
                <HiPlusSm />
              </span>
            </h4>
            <h4 className="cart-price-div">{price}</h4>
            <span>
              <ImCross style={{ fontSize: "10px", color: "gray" }} />
            </span>
          </div>
        ))}
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
