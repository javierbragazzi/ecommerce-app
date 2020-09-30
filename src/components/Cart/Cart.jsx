import React, { useContext, useState, useEffect } from 'react';
import {Button, Collapse} from 'react-bootstrap';
import CurrencyFormat from 'react-currency-format';

import SpinnerCustom from '../../components/SpinnerCustom/SpinnerCustom';
import SubmitForm from '../../components/SubmitForm/SubmitForm';
import CartProducts from '../../components/CartProducts/CartProducts';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';


function Cart(){
    const [open, setOpen] = useState(false);
    const [buttonText, setButtonText] = useState("Comprar");
    const [buttonVariant, setButtonVariant] = useState("success");
    const [loading, setLoading] = useState(true);

    const { cartItems, itemCount, total, checkout, orderId, cleanCart, resetCheckout  } = useContext(CartContext);

    useEffect(() => {
            resetCheckout();
            setLoading(false);
    },[])

    function buy()
    {

        setOpen(!open);

        if(open === false){
            setButtonText("Cancelar");
            setButtonVariant("warning");
        }
        else{
            setButtonText("Comprar");
            setButtonVariant("success");
        }
    }



    return <>
            <div >
                <div className="text-center mt-5">
                    <h1>Carrito</h1>
                    <p>Aquí veras los productos seleccionados para la compra</p>
                </div>
                { loading &&  <SpinnerCustom  /> }
                <div className="row no-gutters justify-content-center">
                    <div className="col-sm-9 p-3">
                        {
                            cartItems.length > 0 ?
                            <div>
                            <CartProducts/> 
                            <Collapse in={open}  >
                                <div style={{margin: "20px 0px 0px 0px"}}>
                    
                                    <SubmitForm/>
                                </div>
                            </Collapse>
                            </div>
                            :
                            !checkout ?
                                <div>
                                    <div className="p-3 text-center text-muted">
                                        Tu carrito está vacío
                                    </div>
                                    <div className="p-3 text-center text-muted">
                                    <Link to="/" className="btn btn-outline-success btn-sm">Ir a comprar</Link>
                                    </div>
                                </div>
                                :
                                <div className="p-3 text-center text-success">
                                <p>¡Compra exitosa!</p>
                                <p>Tu número de orden es: {orderId}</p>                          
                                 <Link to="/" className="btn btn-outline-success btn-sm"  >Comprar más</Link>
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
                                    <Button variant={buttonVariant} onClick={() => buy()}  >{buttonText}</Button> {'       '}
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