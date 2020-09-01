import React from 'react';
import ShoppingCartImage from '../../assets/shopping-cart.png';

function CartIcon(){
    return(<>
                <img
                    alt=""
                    src={ShoppingCartImage}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />
           </>
    );
}

export default CartIcon;