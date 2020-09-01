import React from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons'

import './ItemDetail.css';
import { Button } from 'react-bootstrap';
import ItemCount from '../../components/ItemCount/ItemCount';
import { useEffect } from 'react';
import { useState } from 'react';

const GetItem = (id) => {  
    const item = [{ id: '1', title: 'HP', subtitle: "Modelo: 250 G7", category:"Notebooks", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero voluptatem nam pariatur voluptate perferendis, asperiores aspernatur! Porro similique consequatur, nobis soluta minima, quasi laboriosam hic cupiditate perferendis esse numquam magni." , price:'$ 90.000', image:'https://www.computershopping.com.ar/Images/Productos/HP-250-G7_Foto0.jpg', minStock:'1', maxStock:'8'},
                  { id: '2', title: 'Acer', subtitle: "Modelo: 800 Plus", category:"Notebooks", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero voluptatem nam pariatur voluptate perferendis, asperiores aspernatur! Porro similique consequatur, nobis soluta minima, quasi laboriosam hic cupiditate perferendis esse numquam magni." , price:'$ 70.000', image:'https://static.acer.com/up/Resource/Acer/Laptops/Aspire_1/images/20190430/Acer-Aspire-1-A115-31-main.png', minStock:'1', maxStock:'3'}]
                  .find(x => x.id === id);

    return item;
}


function ItemDetail() {
    const { idItem } = useParams();
    const [ item, setItem ] = useState(null);
    const [ quantityToBuy, setQuantityToBuy ] = useState(1);

    useEffect(() => {
        setItem(GetItem(idItem));
        setQuantityToBuy(quantityToBuy);
        return () => {

        }
    },[idItem, quantityToBuy]);

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
                                <a href="/"><FontAwesomeIcon icon={faArrowAltCircleLeft} /> </a>
                                </div>
                                <h3>{item.category}</h3>
                            </div>
                            <div className="card__body">
                                <div className="half">
                                <div className="featured_text">
                                    <h1>{item.title}</h1>
                                    <p className="sub">{item.subtitle}</p>
                                    <p className="price">{item.price}</p>
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
                                    <Button>Comprar {quantityToBuy}</Button>
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