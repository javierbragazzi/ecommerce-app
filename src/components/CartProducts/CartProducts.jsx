import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

import CartItem from '../../components/CartItem/CartItem';

function CartProducts () {

    const { cartItems } = useContext(CartContext);

    return ( 
        <div >
            <div className="card card-body border-0">

                {
                    cartItems.map(product =>  <CartItem key={product.id} product={product}/>)
                }

            </div>
        </div>

     );
}
 
export default CartProducts;