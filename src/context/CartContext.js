import React, { useContext, useState } from "react";

export const CartContext = React.createContext();

export const useCartContext = () => useContext(CartContext);

export function CartProvider({ defaultValue = [], children }) {
  const [cartItems, setCartItems] = useState(defaultValue);
  const [checkout, setCheckout] = useState(false);
  //const [itemCount, setItemCount] = useState(0);
  //const [total, setTotal] = useState(0);
  
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
        //sumItems();
    }

    function cleanCart() {
        setCartItems([]);
        //sumItems();
    }

    function doCheckout(){
        setCheckout(true);
        cleanCart();
    }

  //  function sumItems ({cartItems}) {
    //    setItemCount(cartItems.reduce((total, product) => total + product.quantity, 0));
    //    setTotal(cartItems.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2));
   // }
    
    const itemCount = cartItems.reduce((total, product) => total + product.quantity, 0);

    const total = cartItems.reduce((total, product) => total + product.price * product.quantity, 0);
 
   // const quantity = cartItems.reduce((previousValue, cartItem) => {
   //     return previousValue + cartItem.quantity;
   // }, 0);
  
  return (
    <CartContext.Provider value={{ cartItems, checkout, itemCount, total, doCheckout, addItemToCart, cleanCart }}>
      {children}
    </CartContext.Provider>
  );
}