import CartItems from "./CartItems";

const Header = () => {
  const cartItems = { length: 1, total: 49.99 };
  return (
    <header>
      <h1>The Shop!</h1>
      <div className="cart">
        <h2>Your Cart</h2>
        {cartItems.length > 0 ? <CartItems /> : <p>Your cart is empty</p>}
        <p>Total: ${cartItems.total}</p>
        <button className="checkout" disabled>
          Checkout
        </button>
      </div>
    </header>
  );
};

export default Header;
