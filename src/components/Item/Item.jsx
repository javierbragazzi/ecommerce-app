  
  import React, {useEffect} from 'react';
  import {Card} from 'react-bootstrap';
  import { Link } from 'react-router-dom';
  import CurrencyFormat from 'react-currency-format';
  
  import './Item.css';
  
  function Item({item}){
  
      
      useEffect(() => {
              console.log('item: ' + JSON.stringify(item));
        }, []);
     // function onAddShow(quantity){
    //      alert("Se agregaron " + quantity + " unidades al carrito");
    //    } style={{width: "100px", height:"100px", margin: "0 auto"}}
  
    return <>
    <div className='divComponent'>
           <Card style={{width: "250px", margin:"10px"}}>
               <Card.Img variant="top" src={item.image} style={{maxWidth: "100%", maxHeight: "100%", height:"auto", width:"auto", margin: "0 auto"}} />
               <Card.Body>
                   <Card.Title>{item.title}{' - '}{item.subtitle}</Card.Title>
                   <Card.Text>
                      <CurrencyFormat  value={item.price} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} prefix={'$ '} />
                   </Card.Text>
               </Card.Body>
               <Card.Footer className="divFooterComponent" >
                   <Link to={{pathname: `/itemDetail/${item.id}`}}  >Mas detalles</Link>
             
               </Card.Footer>
           </Card>
           </div>
       </>
  }
  
  export default Item;