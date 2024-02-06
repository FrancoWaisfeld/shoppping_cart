const App = () => {
  return (
    <div id="app">
      <header>
        <h1>The Shop!</h1>
        <div className="cart">
          <h2>Your Cart</h2>
          <p>Your cart is empty</p>
          <p>Total: $0</p>
          <button className="checkout" disabled>
            Checkout
          </button>
        </div>
      </header>

      <main>
        <div className="product-listing">
          <h2>Products</h2>
          <ul className="product-list">
            <li className="product">
              <div className="product-details">
                <h3>Amazon Kindle E-reader</h3>
                <p className="price">$79.99</p>
                <p className="quantity">5 left in stock</p>
                <div className="actions product-actions">
                  <button className="add-to-cart">Add to Cart</button>
                  <button className="edit">Edit</button>
                </div>
                <button className="delete-button">
                  <span>X</span>
                </button>
              </div>
            </li>

            <li className="product">
              <div className="product-details">
                <h3>Apple 10.5-Inch iPad Pro</h3>
                <p className="price">$649.99</p>
                <p className="quantity">2 left in stock</p>
                <div className="actions product-actions">
                  <button className="add-to-cart">Add to Cart</button>
                  <button className="edit">Edit</button>
                </div>
                <button className="delete-button">
                  <span>X</span>
                </button>
              </div>
            </li>

            <li className="product">
              <div className="product-details">
                <h3>Yamaha Portable Keyboard</h3>
                <p className="price">$155.99</p>
                <p className="quantity">0 left in stock</p>
                <div className="actions product-actions">
                  <button className="add-to-cart" disabled>
                    Add to Cart
                  </button>
                  <button className="edit">Edit</button>
                </div>
                <button className="delete-button">
                  <span>X</span>
                </button>
              </div>
            </li>
          </ul>
        </div>
        <div className="add-form">
          <p>
            <button className="add-product-button">Add A Product</button>
          </p>
          <h3>Add Product</h3>
          <form>
            <div className="input-group">
              <label htmlFor="product-name">Product Name:</label>
              <input
                type="text"
                id="product-name"
                name="product-name"
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="product-price">Price:</label>
              <input
                type="number"
                id="product-price"
                name="product-price"
                min="0"
                step="0.01"
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="product-quantity">Quantity:</label>
              <input
                type="number"
                id="product-quantity"
                name="product-quantity"
                min="0"
                required
              />
            </div>
            <div className="actions form-actions">
              <button type="submit">Add</button>
              <button type="button">Cancel</button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default App;
