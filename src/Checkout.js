import React from 'react';
import './Checkout.css';
import './Subtotal';

function Checkout() {

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/01/img18/home/journeys/MTIzMTg1NGEt/MTIzMTg1NGEt-Mzk5NmM5YjUt-w1500._CB404787706_.jpg" />
                <div>
                    <h2 className="checkout__title">Your shopping Basket</h2>
                    {/*Product*/}
                    
                </div>
            
            </div>

            <div className="checkout__right">
               <Subtotal />
            </div>
        </div>
    )
}

export default Checkout;