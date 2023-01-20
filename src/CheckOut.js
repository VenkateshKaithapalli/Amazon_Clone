import React from "react";
import "./CheckOut.css";
import CheckOutProduct from "./CheckOutProduct";
import Ad from "./PC_header.jpg";
import { StateValue } from "./StateProvider";
import SubTotal from "./SubTotal";
const CheckOut = () => {
  const [{ basket }] = StateValue();
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img className="checkout_ad" src={Ad} alt="" />
        {basket?.length === 0 ? (
          <div>
            <h2>Your Cart is Empty </h2>
            <p>
              You have no items in your cart.To buy one or more items,click{" "}
              <strong>"Add to Cart"</strong> next to the item
            </p>
          </div>
        ) : (
          <div>
            <h2 className="checkout_title">Your Cart Items</h2>
            {basket?.map((item, index) => (
              <CheckOutProduct
                key={index}
                id={item.id}
                title={item.title}
                price={item.price}
                rating={item.rating}
                image={item.image}
              />
            ))}
          </div>
        )}
      </div>
      {basket?.length > 0 ? (
        <div className="checkout_right">
          <SubTotal />
        </div>
      ) : (
		<div className="checkout_right">
		<SubTotal />
	  </div>
      )}
    </div>
  );
};

export default CheckOut;
