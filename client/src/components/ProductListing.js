import EditableProduct from "./EditableProduct";

const ProductListing = ({
  products,
  onEditProductSubmit,
  onDeleteClick,
  onAddToCart,
}) => {
  return (
    <div className="product-listing">
      <h2>Products</h2>
      <ul className="product-list">
        {products.map((product) => (
          <EditableProduct
            key={product._id}
            product={product}
            onEditProductSubmit={onEditProductSubmit}
            onDeleteClick={onDeleteClick}
            onAddToCart={onAddToCart}
          />
        ))}
      </ul>
    </div>
  );
};

export default ProductListing;
