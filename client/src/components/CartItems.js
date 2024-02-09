import { calculateCartTotal } from "../utils/helpers";
import CartItem from "./CartItem";

const CartItems = ({ cart }) => {
  console.log(cart);
  return (
    <table className="cart-items">
      <thead>
        <tr>
          <th scope="col">Item</th>
          <th scope="col">Quantity</th>
          <th scope="col">Price</th>
        </tr>
      </thead>
      <tbody>
        {cart.map((cartItem) => (
          <CartItem key={cartItem._id} cartItem={cartItem} />
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td colSpan="3" className="total">
            Total: ${calculateCartTotal(cart)}
          </td>
        </tr>
      </tfoot>
    </table>
  );
};

export default CartItems;
