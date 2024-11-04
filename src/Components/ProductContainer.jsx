import ProductCard from "./ProductCard";

export default function ProductContainer({
  products,
  addToCart,
  quantity,
  updateQuantity,
}) {
  return (
    <div className="ProductsContainer">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          {...product}
          addToCart={addToCart}
          quantity={quantity[product.id] || 0}
          setQuantity={(newQuantity) => updateQuantity(product.id, newQuantity)}
        />
      ))}
    </div>
  );
}
