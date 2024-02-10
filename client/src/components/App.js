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
import { addToCart, checkoutCart, fetchCart } from "../services/cartService";
import { replaceItemInArray } from "../utils/helpers";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [addProductVisible, setAddProductVisible] = useState(false);

  useEffect(() => {
    (async () => {
      const data = await fetchProducts();
      setProducts(data);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const data = await fetchCart();
      setCart(data);
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
      const newProducts = replaceItemInArray(products, data);
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

  const handleAddToCart = async (id) => {
    try {
      let newCart;
      const data = await addToCart(id);
      const { product, item } = data;

      const newProducts = replaceItemInArray(products, product);

      if (cart.some((ele) => ele._id === item._id)) {
        newCart = replaceItemInArray(cart, item);
      } else {
        newCart = cart.concat(item);
      }

      setProducts(newProducts);
      setCart(newCart);
    } catch (e) {
      console.error(e);
    }
  };

  const handleCheckout = async () => {
    try {
      await checkoutCart();
      setCart([]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div id="app">
      <Header cart={cart} onCheckout={handleCheckout} />
      <main>
        <ProductListing
          products={products}
          onEditProductSubmit={handleEditProductSubmit}
          onDeleteClick={handleDeleteClick}
          onAddToCart={handleAddToCart}
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
