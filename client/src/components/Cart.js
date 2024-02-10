import CartItems from "./CartItems";

const Cart = ({ cart, onCheckout }) => {
  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cart.length > 0 ? <CartItems cart={cart} /> : <p>Your cart is empty</p>}
      <button
        className="checkout"
        disabled={cart.length === 0}
        onClick={() => onCheckout()}
      >
        Checkout
      </button>
    </div>
  );
};

export default Cart;
