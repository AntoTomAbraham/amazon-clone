import React from 'react'
import "./Product.css"
import { useStateValue } from './StateProvider';

function Product({id,title,image,price,rating}) {
const [{},dispatch]=useStateValue();    
    
    const addtobasket=() => {
        dispatch({
            type:"Add_to_basket",
            item:{
                id:id,
                title:title,
                image:image,
                rating:rating,
            }
        })
    };


    return (
        <div className="product">
            <div className="product_info">
            <p>{title}</p>
            <p className="Product_">
                <small>Rs</small>
                <strong>{price}</strong>
            </p>
            <div className="product_rating">{
                Array(rating).fill().map((_) => (
                    <p className="star">*</p>
                ))
              }
            </div>
            </div>
            <img src={image} alt=""/>
            <br/>
            <button onClick={addtobasket}>Add to basket</button>
           

        </div>
    )
}

export default Product
