import axios from "axios";

const testItems = [
  {
    _id: "545454f72092473d55a809e1",
    title: "Kindle",
    price: 50,
    quantity: 3,
    productId: "61d754d72092473d55a809e1",
    createdAt: "2020-10-04T05:57:02.777Z",
    updatedAt: "2020-10-04T05:57:02.777Z",
    _v: 0,
  },
  {
    _id: "51d754d72092473333a809e1",
    title: "Mac Mini",
    price: 850,
    quantity: 2,
    productId: "51d754d72092473333a809e1",
    createdAt: "2020-10-04T05:57:02.777Z",
    updatedAt: "2020-10-04T05:57:02.777Z",
    _v: 0,
  },
];

export const fetchCart = async () => {
  const { data } = await axios.get("/api/cart");
  return data;
};

export const addToCart = async (productId) => {
  const { data } = await axios.post(`/api/add-to-cart/`, { productId });
  console.log(data);
  return data;
};
