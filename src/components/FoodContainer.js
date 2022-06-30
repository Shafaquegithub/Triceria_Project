import React from "react";
import "./FoodContainer.css";
import { FaStar, FaRegHeart } from "react-icons/fa";
import { BsFilter } from "react-icons/bs";
import { foodData } from "./Data";
import { Scrollbar } from "react-scrollbars-custom";

function FoodContainer() {
  return (
    <>
      <section className="foodContainer-section">
        <div className="filter-div">
          <BsFilter />
          Filter
        </div>
        <div className="sort">
          SortBy:{" "}
          <select name="SortBy" id="">
            <option value="">Recommended</option>
            <option value="">Latest</option>
            <option value="">Non-Veg</option>
          </select>
        </div>
        {/* <Scrollbar style={{ width: "auto", height: "80vh" }}> */}
          <div className="main-div">
            {foodData.map(
              ({ id, title, weight, price, rate, backgroundColor, img }) => (
                <div
                  className="food-container"
                  style={{ backgroundColor: `${backgroundColor}` }}
                  key={id}
                >
                  <div className="star-heart-div">
                    <span className="star-span">
                      <FaStar style={{ color: "yellow" }} />
                      &nbsp; {rate}
                    </span>
                    <span className="heart-span">
                      <FaRegHeart />
                    </span>
                  </div>
                  <div className="img-div">
                    <img src={require(`../image/img${id}.png`)} alt="" />
                  </div>
                  <p className="item-title">
                    {title} <span>{weight}</span>
                  </p>
                  <h6 className="item-price">{price}</h6>
                </div>
              )
            )}
          </div>
        {/* </Scrollbar> */}
      </section>
    </>
  );
}

export default FoodContainer;
