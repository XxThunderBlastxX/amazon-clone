import React from 'react';
import './Subtotal.css';
import CurrencyFormat from "react-currency-format";
import {useStateValue} from "./StateProvider";

function Subtotal() {
    const [{basket}, dispatch] = useStateValue()
    return (
        <div className='subtotal'>
            <CurrencyFormat
                rendertext={(value) => (
                    <>
                <div>
                    Subtotal ({basket.length} items) : <strong>{`${value}`}</strong>
                </div>
                <small className="subtotal__gift">
                    <input type='checkbox'/>This order contains a gift
                </small>
                    </>)}
            decimalScale={2}
            value={0}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}/>
            <button>Proceed to Checkout</button>
        </div>
    );
}

export default Subtotal;