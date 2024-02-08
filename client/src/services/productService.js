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
