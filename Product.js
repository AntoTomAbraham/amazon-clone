import React from 'react'
import "./Product.css"
function Product({id,title,image,price,rating}) {
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
            <button>Add to basket</button>
           

        </div>
    )
}

export default Product
