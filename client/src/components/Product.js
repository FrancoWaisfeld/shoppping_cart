const Product = ({
  product,
  setEditFormVisible,
  onDeleteClick,
  onAddToCart,
}) => {
  const handleAddToCart = () => {
    onAddToCart(product._id);
  };
  return (
    <div className="product-details">
      <h3>{product.title}</h3>
      <p className="price">${product.price}</p>
      <p className="quantity">{product.quantity} left in stock</p>
      <div className="actions product-actions">
        <button
          className="add-to-cart"
          disabled={product.quantity <= 0}
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
        <button className="edit" onClick={() => setEditFormVisible(true)}>
          Edit
        </button>
      </div>
      <button
        className="delete-button"
        onClick={() => onDeleteClick(product._id)}
      >
        <span>X</span>
      </button>
    </div>
  );
};

export default Product;
