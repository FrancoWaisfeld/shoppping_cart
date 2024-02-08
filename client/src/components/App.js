import Header from "./Header";
import AddForm from "./AddForm";
import ProductListing from "./ProductListing";
import { useEffect, useState } from "react";
import axios from "axios";
import { fetchProducts, addNewProduct } from "../services/productService";

const App = () => {
  const [products, setProducts] = useState([]);
  const [addProductVisible, setAddProductVisible] = useState(false);

  useEffect(() => {
    (async () => {
      const data = await fetchProducts();
      setProducts(data);
    })();
  }, []);

  const handleCancelClick = () => {
    // TODO form reset
    setAddProductVisible(false);
  };

  const handleAddProductSubmit = async (newProduct, callback) => {
    try {
      const { data } = await addNewProduct(newProduct);
      setProducts(products.concat(data));

      if (callback) {
        callback();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div id="app">
      <Header />
      <main>
        <ProductListing products={products} />
        {addProductVisible ? (
          <AddForm
            onCancelClick={handleCancelClick}
            onAddProductSubmit={handleAddProductSubmit}
          />
        ) : (
          <button onClick={() => setAddProductVisible(true)}>
            Add a product
          </button>
        )}
      </main>
    </div>
  );
};

export default App;
