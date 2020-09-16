import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import CurrencyFormat from 'react-currency-format';

import SubmitForm from '../../components/SubmitForm/SubmitForm';
import CartProducts from '../../components/CartProducts/CartProducts';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import { getFirestore } from '../../firebase';
import * as firebase from 'firebase/app';
import 'firebase/firestore';



function Cart(){
    const [orderId, setOrderId] = useState();
    const [checkout, setCheckout] = useState(false);

    async function createOrder(cartItems, total){
        const db = getFirestore();
        const orders = db.collection("orders");
    
    
        const userInfo = {
            name:'Javier Bragazzi',
            phone: '1122223333',
            email:'javierr87@gmail.com',
        }
        
        const newOrder = { 
            buyer: userInfo,
            items: cartItems,
            date: firebase.firestore.FieldValue.serverTimestamp(),
            total: total,
        };
    
    /*     orders.add(newOrder).then(({ id }) => {
            setOrderId(id); //SUCCESS
        }).catch(err => {
            setError(err); //ERROR
        }).finally(() => {
            //setLoading(false);
        }); */
    
        debugger;
    
        try {
		    const { id } = await orders.add(newOrder);
            setOrderId(id);
            setCheckout(true);
            cleanCart();
            console.log('Id de orden: ' + orderId);
        }catch(err) {
            console.log('Error: ' + err);
        }
    
    }

    const { cartItems, itemCount, total, doCheckout, cleanCart  } = useContext(CartContext);

    return <>
            <div >
                <div className="text-center mt-5">
                    <h1>Carrito</h1>
                    <p>Aquí veras los productos seleccionados para la compra</p>
                </div>

                <div className="row no-gutters justify-content-center">
                    <div className="col-sm-9 p-3">
                        {
                            cartItems.length > 0 ?
                            <CartProducts/> :
                            <div>
                                <div className="p-3 text-center text-muted">
                                    Tu carrito está vacío
                                </div>
                                <div className="p-3 text-center text-muted">
                                <Link to="/" className="btn btn-outline-success btn-sm">Ir a comprar</Link>
                                </div>
                            </div>    

                        }

                        { checkout && 
                            <div className="p-3 text-center text-success">
                                <p>¡Compra exitosa!</p>
                                <p>Tu número de orden es: {orderId}</p>
                                 <Link to="/" className="btn btn-outline-success btn-sm">Comprar más</Link>
                            </div>
                        }
                    </div>
                    {
                        cartItems.length > 0 && 
                        <div className="col-sm-3 p-3">
                            <div className="card card-body">
                                <p className="mb-1">Total de items</p>
                                <h4 className=" mb-3 txt-right">{itemCount}</h4>
                                <p className="mb-1">Monto total</p>
                                <h3 className="m-0 txt-right"> 
                                    <CurrencyFormat  value={total} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} prefix={'$ '} />      
                                </h3>
                                <hr className="my-4"/>
                                <div className="text-center">
                                    <Button variant="success" onClick={() => createOrder(cartItems, total, cleanCart)} >Finalizar</Button> {'       '}
                                    <Button variant="danger" onClick={cleanCart} >Vaciar</Button>
                
                                </div>

                            </div>
                        </div>
                    }
                    
                </div>
            </div>
    </>
}

export default Cart;