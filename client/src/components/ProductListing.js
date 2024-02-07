import Product from "./Product";

const ProductListing = ({ products }) => {
  return (
    <div className="product-listing">
      <h2>Products</h2>
      <ul className="product-list">
        {products.map((product) => (
          <Product key={product._id} {...product} />
        ))}
      </ul>
    </div>
  );
};

export default ProductListing;
