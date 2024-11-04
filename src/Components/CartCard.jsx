import QuantityCounter from "./QuantityCounter";
export default function CartCard({ item, quantity, setQuantity }) {
  const priceNumber = parseFloat(item.price.replace(/[$,]/g, ""));

  return (
    <div className="CartCard ">
      <img src={item.image} alt="" width="50px" />
      <div className="CartCardInfo">
        <h4> {item.productName}</h4>
        <div>
          <QuantityCounter counter={quantity} setCounter={setQuantity} />
        </div>

        <p>Price:{item.price}</p>
      </div>
      <p>Subtotal: ${(priceNumber * (quantity || 0)).toFixed(2)}</p>
      <button className="RemoveButton" onClick={() => setQuantity(0)}>
        Remove
      </button>
    </div>
  );
}
