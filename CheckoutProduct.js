import React from 'react'
import './CheckoutProduct';
import {useStateValue} from "./StateProvider"
function CheckoutProduct(id,title,image,price,rating) {
    const [{basket},dispatch]= useStateValue();

    const removefrombasket=()=>{
        dispatch({
            type:"remove_from_basket",
            id:id,
        })
    }


    return (
        <div className="checkoutproduct">
            <img className='checkoutproduct_image' src={image} alt=""/>
            <div className="checkoutproduct_info">
                <p>{title}</p>
            </div>
            <div className="checkoutproduct_price">
                <small>Rs</small>
                <p>{price}</p>
                <div className="checkoutproduct_rating">{
                Array(rating).fill().map((_) => (
                    <p className="star">*</p>
                )) 
              }
              <button onClick = "removefrombasket">Remove from Basket</button>
            </div>
            </div>
        </div>
    )
}

export default CheckoutProduct

