import React from "react";
import { MdAccessTimeFilled } from "react-icons/md";
import { HiMinusSm, HiPlusSm } from "react-icons/hi";
import { ImCross } from "react-icons/im";
import { cartData } from "./Data";
import "./MyOrder.css";
import { Link } from "react-router-dom";
import { BsCartFill } from "react-icons/bs";

function MyOrder() {
  return (
    <>
      <div className="myorder-container">
        <div className="heading-div">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h2>My Order</h2>{" "}
            <span
              style={{ fontSize: "15px", color: "#48D893", fontWeight: "300" }}
            >
              Edit
            </span>
          </div>
          <h4 className="time-div">
            <span>
              <MdAccessTimeFilled />
            </span>
            &nbsp; 14:30 AM
          </h4>
          <hr style={{ border: "1px solid #EBEFFA" }} />
          {cartData.map(({ id, title, weight, price }) => (
            <div className="myorder-items-div" key={id}>
              <img src={require(`../image/img${id}.png`)} alt="" />
              <p>
                {title} <br />
                <span>{weight}</span>
              </p>
              <h4 className="plus-minus-div">
                <span>
                  <HiMinusSm />
                </span>
                <span>1</span>
                <span>
                  <HiPlusSm />
                </span>
              </h4>
              <h4 className="price-div">{price}</h4>
              <span>
                <ImCross style={{ fontSize: "10px", color: "gray" }} />
              </span>
            </div>
          ))}

          {/* drop box */}

          <div className="dropbox">Drag & Drop</div>
          <h4 className="total">
            <span>Total</span>
            <span>$15.94</span>
          </h4>
          <div className="checkout">
            <Link to={"/myCart"}>
              <button>CheckOut</button>
            </Link>
          </div>
        </div>
      </div>

      {/* cart icon div */}
      <Link to="/myCart">
        <div className="cart-div">
          <BsCartFill />
        </div>
      </Link>
    </>
  );
}

export default MyOrder;
