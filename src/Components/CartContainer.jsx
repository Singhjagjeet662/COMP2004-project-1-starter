import CartCard from "./CartCard";

export default function CartContainer({
  cart,
  emptyCart,
  quantity,
  updateQuantity,
  totalPrice,
}) {
  return (
    <div className="CartContainer">
      <h2>Cart Items</h2>
      {cart.length === 0 ? (
        <p>No items in the cart.</p>
      ) : (
        <>
          {cart.map((item) => (
            <CartCard
              key={item.id}
              item={item}
              quantity={quantity[item.id] || item.quantity}
              setQuantity={(newQuantity) =>
                updateQuantity(item.id, newQuantity)
              }
            />
          ))}
          <div className="CartListBtns">
            <button onClick={emptyCart}>Empty Cart</button>
            <button id="BuyButton">Buy - {totalPrice}</button>
          </div>
        </>
      )}
    </div>
  );
}
