import React, {useEffect, useState, useContext} from 'react';
import { useParams, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';
import CurrencyFormat from 'react-currency-format';
import { Button } from 'react-bootstrap';

import './ItemDetail.css';

import ItemCount from '../../components/ItemCount/ItemCount';
import { CartContext } from '../../context/CartContext';


const GetItem = (id) => {  
    const item = [{ id: '1', title: 'HP', subtitle: "Modelo: 250 G7", category:"Notebooks", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero voluptatem nam pariatur voluptate perferendis, asperiores aspernatur! Porro similique consequatur, nobis soluta minima, quasi laboriosam hic cupiditate perferendis esse numquam magni." , price:90000.99, image:'https://www.computershopping.com.ar/Images/Productos/HP-250-G7_Foto0.jpg', minStock:'1', maxStock:'8', quantity: 0},
                  { id: '2', title: 'Acer', subtitle: "Modelo: 800 Plus", category:"Notebooks", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero voluptatem nam pariatur voluptate perferendis, asperiores aspernatur! Porro similique consequatur, nobis soluta minima, quasi laboriosam hic cupiditate perferendis esse numquam magni." , price:70000.02, image:'https://static.acer.com/up/Resource/Acer/Laptops/Aspire_1/images/20190430/Acer-Aspire-1-A115-31-main.png', minStock:'1', maxStock:'3', quantity: 0}]
                  .find(x => x.id === id);

    return item;
}


function ItemDetail() {
    const { idItem } = useParams();
    const [ item, setItem ] = useState(null);
    const [ quantityToBuy, setQuantityToBuy ] = useState(1);
    const { addItemToCart } = useContext(CartContext);

    useEffect(() => {
        var newItem = GetItem(idItem);
        newItem.quantity = quantityToBuy;
        setItem(newItem);
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
                                <span className="stock"><ItemCount initial={quantityToBuy} min={item.minStock} max={item.maxStock} onChangeQuantity={handleChangeQuantity}></ItemCount></span>
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