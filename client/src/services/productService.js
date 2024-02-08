import axios from "axios";

export const fetchProducts = async () => {
  const { data } = await axios.get("/api/products");
  return data;
};

export const addNewProduct = async (newProduct) => {
  //todo input validation for quantity and price
  const result = await axios.post("/api/products", newProduct, {
    "Content-Type": "application/json",
  });
  return result;
};

export const updateProduct = async ({ id, title, price, quantity }) => {
  const result = await axios.put(`/api/products/${id}`, {
    title,
    price,
    quantity,
  });
  return result;
};
