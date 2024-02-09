import Product from "./Product";
import EditForm from "./EditForm";
import { useState } from "react";

const EditableProduct = ({ product, onEditProductSubmit, onDeleteClick }) => {
  const [editFormVisible, setEditFormVisible] = useState(false);

  return (
    <li className="product">
      <Product
        product={product}
        setEditFormVisible={setEditFormVisible}
        onDeleteClick={onDeleteClick}
      />
      {editFormVisible && (
        <EditForm
          product={product}
          setEditFormVisible={setEditFormVisible}
          onEditProductSubmit={onEditProductSubmit}
        />
      )}
    </li>
  );
};

export default EditableProduct;
