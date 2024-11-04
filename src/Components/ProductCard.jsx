import { useState } from "react";
import QuantityCounter from "./QuantityCounter";
export default function ProductCard({
  productName,
  price,
  image,
  id,
  quantity,
  setQuantity,
  addToCart,
}) {
  const handleAddToCart = () => addToCart({ productName, id, price, image });

  return (
    <div className="ProductCard">
      <img src={image} alt="" width="50px" />
      <h3>{productName}</h3>
      <p>Price: {price}</p>
      <div className="ProductQuantityDiv">
        <QuantityCounter counter={quantity} setCounter={setQuantity} />
      </div>

      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}
