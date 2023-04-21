import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { clearCart } from "../../utils/Cartslice";
import Fooditems from "../../utils/Fooditems";
import "./Cart.css";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleclearcart = () => {
    dispatch(clearCart());
  };

  const orderplaced = () => {
    window.alert("Order Placed Succesfully\nThanks for Shopping");
    handleclearcart();
  };

  let total = 0;
  let Charges = 39;
  let Delivery = 19;
  // const store = useSelector((store)=> store)
  return (
    <div className="cart-container">
      {cartItems.length === 0 ? (
        <div>
          <img
            alt="Empty"
            src="https://cdn.grofers.com/assets/ui/empty_states/emp_empty_cart.png"
            style={{ width: "340px" }}
          />
          <div className="cart-text">Your cart is empty </div>
          <div className="cart-des">
            You can go to home page to view more restaurants{" "}
          </div>
          <Link
            to="/home"
            style={{
              textDecoration: "none",
            }}
          >
            <div className="btn-home">SEE RESTAURANTS NEAR YOU</div>
          </Link>
        </div>
      ) : (
        <div className="empty-cart">
          <button className="add-btn" onClick={() => handleclearcart()}>
            Clear Cart
          </button>

          <div className="Fooditems">
            <div>Item</div>
            <div>Description</div>
            <div>Price</div>
            <div>Remove</div>
          </div>
          <hr />
          {cartItems.map((item) => {
            var { price } = item;
            total = total + price;
            return <Fooditems key={item.id} {...item} />;
          })}
          <hr />
          <div className="order-container">
            <div></div>
            <div></div>
            <div className="My-order">
              <div className="Bill-deatils">Bill Details</div>
              <div className="Food-container">
                <div className="subtotal">Item Total:</div>
                <div className="subtotal">Rs {total / 100}/-</div>
              </div>
              <div className="Food-container">
                <div className="subtotal">Delivery partner fee:</div>
                <div className="subtotal">Rs {Delivery}/-</div>
              </div>
              <div className="line"></div>
              <div className="Food-container">
                <div className="subtotal">Govt Taxes & Other Charges:</div>
                <div className="subtotal">Rs {Charges}/-</div>
              </div>
              <hr />
              <div className="Food-container">
                <div className="totalorder">TO PAY:</div>
                <div className="totalorder">
                  Rs {total / 100 + Charges + Delivery}/-
                </div>
              </div>
            </div>
            
          </div>
              <div
                className="placeorder"
                onClick={() => {
                  orderplaced();
                }}
              >
                Place Order
              
            </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
