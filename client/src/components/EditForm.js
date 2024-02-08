import { useState } from "react";

const EditForm = ({ product, setEditFormVisible, onEditProductSubmit }) => {
  const [formTitle, setFormTitle] = useState(product.title);
  const [formPrice, setFormPrice] = useState(parseFloat(product.price));
  const [formQuantity, setFormQuantity] = useState(parseInt(product.quantity));

  const handleEditFormSubmit = (e) => {
    e.preventDefault();
    try {
      onEditProductSubmit(
        {
          id: product._id,
          title: formTitle,
          price: parseFloat(formPrice),
          quantity: parseInt(formQuantity),
        },
        () => setEditFormVisible(false),
      );
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="edit-form">
      <h3>Edit Product</h3>
      <form onSubmit={handleEditFormSubmit}>
        <div className="input-group">
          <label htmlFor="product-name">Product Name</label>
          <input
            type="text"
            id="product-name"
            value={formTitle}
            aria-label="Product Name"
            onChange={(e) => setFormTitle(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label htmlFor="product-price">Price</label>
          <input
            type="number"
            id="product-price"
            value={formPrice}
            aria-label="Product Price"
            onChange={(e) => setFormPrice(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label htmlFor="product-quantity">Quantity</label>
          <input
            type="number"
            id="product-quantity"
            value={formQuantity}
            aria-label="Product Quantity"
            onChange={(e) => setFormQuantity(e.target.value)}
          />
        </div>

        <div className="actions form-actions">
          <button type="submit">Update</button>
          <button type="button" onClick={() => setEditFormVisible(false)}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditForm;
