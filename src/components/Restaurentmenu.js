import React from "react";
import { useParams } from "react-router";
import { IMG_CDN_URL } from "./Contants";
import "./Restaurantmenu.css";
import UseRestaurant from "../utils/hooks/UseRestaurant";
import { addItem } from "../utils/Cartslice";
import { useDispatch } from "react-redux";
import ShimmerMenu from "./ShimmerMenu";

const Restaurentmenu = () => {
  const { id } = useParams();

  const restaurant = UseRestaurant(id);


  const dispatch = useDispatch();

  const addFoodItem = (Items) => {
    dispatch(addItem(Items));
  };

  return !restaurant ? (
    <ShimmerMenu/>
  ) : (
    <div>
      <div className="menu">

        <div className="img-des">
          <img
            className="images"
            src={
              IMG_CDN_URL +
              restaurant?.cards[0]?.card?.card?.info?.cloudinaryImageId
            }
          />
          <div className="menu-description">
            <h1 className="res-name">
              {restaurant?.cards[0]?.card?.card?.info.name}
            </h1>
            <div>
              <div
                className="color-star"
                style={
                  restaurant?.cards[0]?.card?.card?.info.avgRating < 4
                    ? { backgroundColor: "#db7c38" }
                    : { color: "white" }
                }
              >
                {" "}
                <span className="material-symbols-outlined star">grade</span>
                {restaurant?.cards[0]?.card?.card?.info.avgRating}
              </div>
              <div>Dining Review</div>
            </div>
          </div>
        </div>

        {/* <div className="rr"></div> */}
        <div className="restaurant-menu-contents">
          <p className="res-city" style={{ margin: "2px" }}>
            {restaurant?.cards[0]?.card?.card?.info?.city.toUpperCase()}
          </p>
          <p style={{ margin: "2px" }}>
            {restaurant?.cards[0]?.card?.card?.info?.locality}
          </p>
          <p style={{ margin: "2px" }}>
            {restaurant?.cards[0]?.card?.card?.info?.costForTwoMessage}
          </p>
          <p style={{ margin: "2px" }}>
            At your doorsteps in{" "}
            {restaurant?.cards[0]?.card?.card?.info?.sla?.deliveryTime} mins
          </p>
          <p className="notice">
            Temporarily closed for dining, will be back soon!
          </p>
        </div>
      </div>

      <div className="restaurant-menu-content">
        <div className="menu-items-container">
          <div className="menu-title-wrap">
            <h3 className="menu-title">
              {" "}
              <img
                style={{ height: "16px", width: "25px" }}
                src="https://img.icons8.com/ios/50/000000/cutlery.png"
              />
              Recommended Menu
            </h3>
            <p className="menu-count">
              {console.log(restaurant)}
              {
                restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR
                  ?.cards[1].card?.card?.itemCards?.length
                  
              }{" "}
              ITEMS
              
            </p>
          </div>
          <div className="menu-items-list">
            {restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards?.map(
              (item) => {
                return (
                  <div className="menu-item" key={item?.card?.info?.id}>
                    <div className="menu-item-details">
                      <p style={{ margin: "0" }}>
                        {item?.card?.info?.itemAttribute?.vegClassifier ===
                        "VEG" ? (
                          <img
                            alt="Veg"
                            src="https://img.icons8.com/color/48/null/vegetarian-food-symbol.png"
                            style={{ height: "17px", width: "17px" }}
                          />
                        ) : (
                          <img
                            alt="Non Veg"
                            src="https://img.icons8.com/color/48/null/non-vegetarian-food-symbol.png"
                            style={{ height: "17px", width: "17px" }}
                          />
                        )}
                      </p>
                      <h3 className="item-title">{item?.card?.info?.name}</h3>
                      <p className="item-cost">
                        Rs {item?.card?.info?.price / 100}/-
                      </p>
                      <p className="item-desc">{item?.card?.info?.description}</p>
                      {/* <p>
                        {console.log(
                          restaurant?.cards[2]?.groupedCard?.cardGroupMap
                            ?.REGULAR?.cards[1].card?.card
                        )}
                      </p> */}
                    </div>
                    <div className="menu-img-wrapper">
                      <img
                        className="menu-item-img"
                        src={IMG_CDN_URL + item?.card?.info?.imageId}
                        alt={item?.card?.info?.name}
                      />
                      <p
                        className="ratings"
                        style={
                          item?.card?.info?.ratings?.aggregatedRating?.rating < 4
                            ? { backgroundColor: "#db7c38" }
                            : { color: "white" }
                        }
                      >
                        <span className="material-symbols-outlined star">
                          grade
                        </span>
                        {item?.card?.info?.ratings?.aggregatedRating?.rating}
                      </p>
                      <button
                        className="add-btn"
                        onClick={() => addFoodItem(item?.card?.info)}
                      >
                        {" "}
                        ADD +
                      </button>
                     
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Restaurentmenu;
