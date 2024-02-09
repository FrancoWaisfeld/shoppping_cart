import Header from "./Header";
import AddForm from "./AddForm";
import ProductListing from "./ProductListing";
import { useEffect, useState } from "react";
import {
  fetchProducts,
  addNewProduct,
  updateProduct,
  deleteProduct,
} from "../services/productService";

const App = () => {
  const [products, setProducts] = useState([]);
  const [addProductVisible, setAddProductVisible] = useState(false);

  useEffect(() => {
    (async () => {
      const data = await fetchProducts();
      setProducts(data);
    })();
  }, []);

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

  const handleEditProductSubmit = async (product, callback) => {
    try {
      const { data } = await updateProduct(product);
      const newProducts = products.map((product) =>
        product._id == data._id ? data : product,
      );
      setProducts(newProducts);

      if (callback) {
        callback();
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleDeleteClick = async (productId) => {
    try {
      await deleteProduct(productId);
      setProducts(products.filter((product) => product._id !== productId));
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div id="app">
      <Header />
      <main>
        <ProductListing
          products={products}
          onEditProductSubmit={handleEditProductSubmit}
          onDeleteClick={handleDeleteClick}
        />
        {
          <AddForm
            onAddProductSubmit={handleAddProductSubmit}
            visible={addProductVisible}
            setVisible={setAddProductVisible}
          />
        }
      </main>
    </div>
  );
};

export default App;
