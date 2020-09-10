import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://images-na.ssl-images-amazon.com/images/G/01/img18/home/journeys/MTIzMTg1NGEt/MTIzMTg1NGEt-Mzk5NmM5YjUt-w1500._CB404787706_.jpg" alt="" />
            </div>

            <div className="home__row">
                <Product 
                    id="123"
                    title='The lean' 
                    price={29.99} 
                    rating={5} 
                    image="http://pngimg.com/uploads/monitor/laptop_PNG5882.png" />
                <Product 
                    id="124"
                    title='The example' 
                    price={9.99} 
                    rating={3} 
                    image="http://pngimg.com/uploads/laptop/laptop_PNG5935.png" />
            </div>
            <div className="home__row">
                <Product />
                <Product />
                <Product />
            </div>
            <div className="home__row">
                <Product />
            </div>
        </div>
    )
}

export default Home;