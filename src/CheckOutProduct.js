import React from "react";
import "./CheckOutProduct.css";
import { StateValue } from "./StateProvider";
const CheckOutProduct = ({ id, title, price, rating, image }) => {
	const[,dispatch]=StateValue();
	const removefromBasket=()=>{
       dispatch({
		type:'REMOVE_FROM_BASKET',
		id:id
	   })
	}
  return (
    <div className="checkoutproduct">
      <img src={image} alt="" />
      <div className="checkoutproduct_info">
        <p className="checkoutproduct_title">{title}</p>
        <p className="checkoutproduct_price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutproduct_rating">
          {Array(rating)
            .fill()
            .map((_, index) => (
              <p key={index} className="checkoutproduct_star">
                ★
              </p>
            ))}
        </div>
		<button onClick={removefromBasket}>Remove from Cart</button>
      </div>

    </div>
  );
};

export default CheckOutProduct;
