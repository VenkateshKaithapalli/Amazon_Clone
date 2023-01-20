import React from 'react'
import './Product.css'
import { StateValue } from './StateProvider'
const Product = ({id,title,price,rating,image}) => {
	const [,dispatch]=StateValue();
	const addToCart=()=>{
       dispatch({
		type:'ADD_TO_BASKET',
		item:{
			id,title,price,rating,image
		}
	   })
	}
  return (
	<div className='product'>
		<div className="product_info">
		<p className="product_title">
		{title}
	  </p>
	  <p className="product_price">
		<small>₹</small>
		<strong>{price}</strong>
	  </p>
	  <div className="product_rating">
		{
			Array(rating).fill().map((_,index)=>(<p key={index} className='product_star'>★</p>))
		}
	  </div>
		</div>

	  <img src={image} alt="" />
	  <button onClick={addToCart}>Add to Cart</button>
	</div>
  )
}

export default Product