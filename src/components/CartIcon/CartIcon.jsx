import React, {useContext} from 'react';
import ShoppingCartImage from '../../assets/shopping-cart.png';
import { Button } from 'react-bootstrap';
import { CartContext } from '../../context/CartContext';

function CartIcon(){
    const { itemCount } = useContext(CartContext);

    return(
            <>
            <Button variant="outline-light">
                <img
                    alt=""
                    src={ShoppingCartImage}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
              
              /> {' '} {itemCount}
              </Button>
           </>
    );
}

export default CartIcon;