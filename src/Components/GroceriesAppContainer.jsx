import Navbar from "./Navbar";
import { useState } from "react";
import products from "../data/products";
import ProductContainer from "./ProductContainer";
import CartContainer from "./CartContainer";

export default function GroceriesAppContainer() {
  // state to use cart and set the cart
  const [cart, setCart] = useState([]);
  // state to set quantity and setquantity as per id
  const [quantity, setQuantity] = useState({});
  // function to update quantity
  const updateQuantity = (productId, newQuantity) => {
    setQuantity((prevQuantities) => ({
      ...prevQuantities,
      [productId]: newQuantity,
    }));
  };
  // function to addcart
  const addToCart = (product) => {
    const productQuantity = quantity[product.id] || 0;
    if (productQuantity <= 0) {
      alert("Please add quantity before adding to the cart");
      return;
    }
    // here i am setting the cart
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + productQuantity }
            : item
        );
      }

      return [...prevCart, { ...product, quantity: productQuantity }];
    });

    updateQuantity(product.id, 0);
  };
  //empty function
  const emptyCart = () => setCart([]);
  // function for total price

  const convertPriceToNumber = (price) =>
    parseFloat(price.replace(/[$,]/g, ""));

  const totalPrice = cart.reduce(
    (acc, item) => acc + convertPriceToNumber(item.price) * item.quantity,
    0
  );

  return (
    <div className="">
      <Navbar />
      <ProductContainer
        products={products}
        addToCart={addToCart}
        quantity={quantity}
        updateQuantity={updateQuantity}
      />
      <CartContainer
        cart={cart}
        quantity={quantity}
        updateQuantity={updateQuantity}
        emptyCart={emptyCart}
        totalPrice={totalPrice}
      />
    </div>
  );
}
