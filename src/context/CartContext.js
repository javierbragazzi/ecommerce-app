import React, { useContext, useState } from "react";

export const CartContext = React.createContext();

export const useCartContext = () => useContext(CartContext);

export function CartProvider({ defaultValue = [], children }) {
  const [cartItems, setCartItems] = useState(defaultValue);
  const [checkout, setCheckout] = useState(false);
  const [orderId, setOrderId] = useState();
    
  const itemCount = cartItems.reduce((total, product) => total + product.quantity, 0);

  const total = cartItems.reduce((total, product) => total + product.price * product.quantity, 0);
  
    function addItemToCart(newItem) {
        const currentItemIndex = cartItems.findIndex(
            (cartItem) => newItem.id === cartItem.id
        );
      
        if (currentItemIndex !== -1) {
            const c = [...cartItems];
            c[currentItemIndex].quantity = newItem.quantity;
            setCartItems(c);

            console.log('Ya existe el item');
            console.log('c[currentItemIndex].quantity: ' + c[currentItemIndex].quantity);
            console.log('newItem.quantity: ' + newItem.quantity);

        } else {
            const c = [...cartItems, newItem];
            setCartItems(c);

            console.log('Agrego el item: ' + JSON.stringify(newItem));
        }

        console.log('cartItem: ' + JSON.stringify(newItem));
    }

    function cleanCart() {
        setCartItems([]);
    }

    function doCheckout(){
        setCheckout(true);
        cleanCart();
    }

    function resetCheckout(){
        setCheckout(false);
    }

    function updateOrderId(id){
        debugger;
        setOrderId(id);
    }

    function increase(item){

        const currentItemIndex = cartItems.findIndex(
            (cartItem) => item.id === cartItem.id
        );
              
        if (currentItemIndex !== -1) {
            const c = [...cartItems];

            if( c[currentItemIndex].quantity < item.stock){
                c[currentItemIndex].quantity++;
                setCartItems(c);
            }
            else{

                console.log('No hay mas stock');
            }

        } else {
            console.log('No se encontro el item para actualizar');
        }

    }

    
    function decrease(item){

        const currentItemIndex = cartItems.findIndex(
            (cartItem) => item.id === cartItem.id
        );
      
        if (currentItemIndex !== -1) {
            const c = [...cartItems];
            c[currentItemIndex].quantity--;
            setCartItems(c);

            console.log('Quito un item');

        } else {
            console.log('No se encontro el item para actualizar');
        }

    }

    function remove(item){

        const c = [...cartItems.filter(cartItem => cartItem.id !== item.id)];
        setCartItems(c);

        console.log('Quito del carrito');

    }

  return (
    <CartContext.Provider value={{ cartItems, checkout, itemCount, total, orderId, updateOrderId, doCheckout, addItemToCart, cleanCart, increase, decrease, remove, resetCheckout }}>
      {children}
    </CartContext.Provider>
  );
}