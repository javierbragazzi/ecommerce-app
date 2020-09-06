import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import CurrencyFormat from 'react-currency-format';

function CartItem ({product}) {
    const { increase, decrease, removeProduct } = useContext(CartContext);

    //{ id: '1', title: 'HP', subtitle: "Modelo: 250 G7", category:"Notebooks", description:"Lorem" , price:'$ 90.000', image:'', minStock:'1', maxStock:'8', quantity: '0'},
    return ( 
        <div className="row no-gutters py-2">
            <div className="col-sm-2 p-2">
                <img
                alt={product.title + product.subtitle}  
                style={{margin: "0 auto", maxHeight: "50px"}} 
                src={product.image} className="img-fluid d-block"/>
            </div>
            <div className="col-sm-4 p-2">
                <h5 className="mb-1">{product.title + ' ' + product.subtitle} </h5>
                <p className="mb-1">Precio: <CurrencyFormat  value={product.price} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} prefix={'$ '} />  </p>
                
            </div>
            <div className="col-sm-2 p-2 text-center ">
                 <p className="mb-0">Cant.: {product.quantity}</p>
            </div>

        </div>
     );
}
 
export default CartItem;