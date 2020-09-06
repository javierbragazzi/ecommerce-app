import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import CurrencyFormat from 'react-currency-format';

import CartProducts from '../../components/CartProducts/CartProducts';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

function Cart(){
    const { cartItems, checkout, itemCount, total, doCheckout, cleanCart  } = useContext(CartContext);

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
                                    <Button variant="success" onClick={doCheckout} >Finalizar</Button> {'       '}
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