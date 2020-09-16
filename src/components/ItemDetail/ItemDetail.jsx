import React, {useEffect, useState, useContext} from 'react';
import { useParams, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';
import CurrencyFormat from 'react-currency-format';
import { Button } from 'react-bootstrap';

import './ItemDetail.css';

import ItemCount from '../../components/ItemCount/ItemCount';
import { CartContext } from '../../context/CartContext';
import { getFirestore } from '../../firebase';

function ItemDetail() {
    const { idItem } = useParams();
    const [ item, setItem ] = useState(null);
    const [ quantityToBuy, setQuantityToBuy ] = useState(1);
    const { addItemToCart } = useContext(CartContext);

    useEffect(() => {
        const db = getFirestore();

        const itemCollection = db.collection("items");
        const item = itemCollection.doc(idItem);
                
        item.get().then((doc) => {
            if(!doc.exists){
                console.log("No se encontro el item con id: " + idItem);
                return;
            }
            console.log("Se encontró el item!");
            setItem({id: doc.id, quantity: quantityToBuy, ...doc.data()});
        }).catch((error) => {
            console.log("Error seraching items. Error: ", error);
        }).finally(() => {

        });

        return () => {
        }
    },[idItem]);

    useEffect(() => {
        setQuantityToBuy(quantityToBuy);
        if(item !== null){   
            item.quantity = quantityToBuy;
            setItem(item);
        }
        return () => {

        }
    },[quantityToBuy]);



    function handleChangeQuantity (value) {
        setQuantityToBuy(value);

    };

    return (
        <>  
            <div className="main_item_detail">
                {item &&           
                    <div key={item.idItem}>       
                        <div className="card">
                            <div className="card__title">
                                <div className="icon">
                                    <Link to="/"> <FontAwesomeIcon icon={faArrowAltCircleLeft} /> </Link>                                
                                </div>
                                <h3>{item.category}</h3>
                            </div>
                            <div className="card__body">
                                <div className="half">
                                <div className="featured_text">
                                    <h1>{item.title}</h1>
                                    <p className="sub">{item.subtitle}</p>
                                    <p className="price"> <CurrencyFormat  value={item.price} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} prefix={'$ '} />  </p>
                                </div>
                                <div className="image">
                                    <img src={item.image} alt=""/>
                                </div>
                                </div>
                                <div className="half">
                                <div className="description">
                                    <p>{item.description}</p>
                                </div>
                                <span className="stock"><i className="fa fa-pen"></i>En stock</span>
                                <span className="stock"><ItemCount initial={quantityToBuy} min={1} max={item.stock} onChangeQuantity={handleChangeQuantity}></ItemCount></span>
                                </div>
                            </div>
                            <div className="card__footer">
                            <div className="recommend">
                
                            </div>
                                <div className="action" >
                                    <Button onClick={() => addItemToCart(item)} >Comprar {quantityToBuy}</Button>
                                </div>
                            </div>
                        </div>
                    </div>  
                
                }
            </div> 
        </>
    );

}
export default ItemDetail;