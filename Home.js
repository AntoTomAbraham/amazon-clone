import React from 'react';
import './Home.css';
import Product from"./Product.js"
function Home() {
    return (
        <div className="home">
            <img className="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/MAI/app_page/newqr/PC._CB435392213_.jpg" alt=""/>
            <div className="home_row">
            <Product 
            id="12345"
            title="Apple iPhone 11 Pro Max (Midnight Green, 64 GB)"
            price={ 59,990}
            rating={5}
            image="data:image/jpeg;base64,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"
            />
            <Product 
            id="123456"
            title="Samsung Galaxy M31 (Ocean Blue, 6GB RAM, 128GB Storage)"
            price={ 12,990}
            rating={5}
            image="https://m.media-amazon.com/images/I/71-Su4Wr0HL._AC_UY327_FMwebp_QL65_.jpg"
            />
            </div>
            <div className="home_row">
            <Product 
            id="123457"
            title="Apple iPhone 11 Pro Max (Midnight Green, 64 GB)"
            price={59,990}
            rating={5}
            image="https://m.media-amazon.com/images/I/710zedIX2RL._AC_UY327_FMwebp_QL65_.jpg"
            />
            <Product 
            id="123458"
            title="Apple iPhone 11 Pro Max (Midnight Green, 64 GB)"
            price={59,990}
            rating={5}
            image="https://m.media-amazon.com/images/I/61tuQdl2yLL._AC_UY327_FMwebp_QL65_.jpg"
            />
            <Product 
            id="123459"
            title="Apple iPhone 11 Pro Max (Midnight Green, 64 GB)"
            price={59,990}
            rating={5}
            image="https://m.media-amazon.com/images/I/514ETCdN3CL._AC_UY327_FMwebp_QL65_.jpg"
            /> 
            </div>
            <div className="home_row">
            <Product 
            id="123451"
            title="Apple iPhone 11 Pro Max (Midnight Green, 64 GB)"
            price={59,990}
            rating={5}
            image="https://m.media-amazon.com/images/I/71L2iBSyyOL._AC_UY327_FMwebp_QL65_.jpg"
            />
            </div>
        </div>
    )
}

export default Home
