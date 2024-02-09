const CartItem = ({ cartItem }) => {
  const { title, quantity, price } = cartItem;

  return (
    <tr>
      <td>{title}</td>
      <td>{quantity}</td>
      <td>${price}</td>
    </tr>
  );
};

export default CartItem;
