import React from 'react';
import {useStateValue} from "./StateProvider";
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct.js';
import Subtotal from "./Subtotal";
import CurrencyFormat from "react-currency-format";

function Checkout() {
    const [{basket}] = useStateValue();
    return (
        <div className='checkout'>
            <div className='checkout__left'>
                <img className='checkout__ad' src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/PrimeRewards/LP_Revamp/PC_Header_Banner._CB468631809_.jpg"/>
                {basket.length === 0 ? (
                    <div>
                        <h2>Your shopping basket is empty</h2>
                        <p>You have no such items in your basket. To buy one or more items, click "Add to Basket" next to the item. </p>
                    </div>
                ) : (
                    <div>
                        <h2 className='checkout__title'>
                            {basket.map((item) => (
                                <CheckoutProduct
                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                    rating={item.rating}/>
                            ))
                            }
                        </h2>
                    </div>
                )}
            </div>
            {basket.length != 0 && (
                <div className='checkout__right'>
                    <Subtotal/>
                </div>
            )}
        </div>
    );
}

export default Checkout;