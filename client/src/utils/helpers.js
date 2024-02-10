export const calculateCartTotal = (items) => {
  return items.reduce((acc, item) => acc + item.price * item.quantity, 0);
};

export const replaceItemInArray = (arr, newElement) => {
  return arr.map((element) =>
    element._id === newElement._id ? newElement : element,
  );
};
