import EditableProduct from "./EditableProduct";

const ProductListing = ({ products, onEditProductSubmit }) => {
  return (
    <div className="product-listing">
      <h2>Products</h2>
      <ul className="product-list">
        {products.map((product) => (
          <EditableProduct
            key={product._id}
            product={product}
            onEditProductSubmit={onEditProductSubmit}
          />
        ))}
      </ul>
    </div>
  );
};

export default ProductListing;
