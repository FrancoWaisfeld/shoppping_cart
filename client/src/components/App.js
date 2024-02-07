import Header from "./Header";
import AddProduct from "./AddProduct";
import ProductListing from "./ProductListing";
import { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const source = axios.CancelToken.source();
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get("/api/products", {
          cancelToken: source.token,
        });
        setProducts(data);
      } catch (e) {
        console.error(e);
      }
    };

    fetchProducts();

    return () => {
      source.cancel("Canceling for some reason");
    };
  }, []);

  return (
    <div id="app">
      <Header />
      <main>
        <ProductListing products={products} />
        <AddProduct />
      </main>
    </div>
  );
};

export default App;
