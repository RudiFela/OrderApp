import React, { useState } from "react";
import Product from "../../models/product";
import ProductCard from "../ProductCard/ProductCard";
import ProductInputs from "../UI/ProductInputs/ProductInputs";
import { FaList } from "react-icons/fa";
import { BsFillGridFill } from "react-icons/bs";
import { MdAddCircle } from "react-icons/md";
import ProductList from "../ProductList/ProductList";
import Button from "../UI/Button/Button";
import Modal from "../UI/Modal/Modal";
import { JsxElement } from "typescript";
import ProductGrid from "../ProductGrid/ProductGrid";
const productsArray = [
  new Product(
    "Bannana",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Banana-Single.jpg/1200px-Banana-Single.jpg",
    "34"
  ),
  new Product(
    "Grape",
    "https://media.istockphoto.com/photos/grape-dark-grape-grapes-with-leaves-isolated-with-clipping-path-full-picture-id803721418?k=20&m=803721418&s=612x612&w=0&h=U2vUEoYYZD6xdYJc-2dhZpa1EvIxkXdiUaAlE-Kexn4=",
    "29"
  ),
  new Product(
    "Watermelon",
    "https://www.verodav-shop.com/wp-content/uploads/2022/01/whole-and-slices-watermelon.jpg",
    "54"
  ),
  new Product(
    "Apple",
    "https://static.libertyprim.com/files/varietes/pomme-topaz-large.jpg",
    "16"
  ),
];
const Products: React.FC<{ darkMode: boolean }> = (props) => {
  const [listingType, setListingType] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [products, setProducts] = useState(productsArray);
  const [selectedProduct, setSelectedProduct] = useState<Product>();
  const [editMode, setEditMode] = useState<boolean>();
  const closeModal = () => {
    setShowModal(false);
  };
  const onAddProductHandler = () => {
    setEditMode(false);
    setSelectedProduct(undefined);
    setShowModal(true);
  };
  const addNewProduct = (
    productName: string,
    productPrice: string,
    productImageUrl: string
  ) => {
    closeModal();
    setProducts((prevState) => {
      return prevState.concat(
        new Product(productName, productImageUrl, productPrice)
      );
    });
  };
  const onSelectProduct = (product: Product) => {
    setSelectedProduct(product);
    setEditMode(true);
    setShowModal(true);
  };
  const updateProduct = (
    productName: string,
    productPrice: string,
    productImageUrl: string,
    product: Product
  ) => {
    let x: Product = new Product(productName, productImageUrl, productPrice);

    const updatedProducts: Product[] = products.map((item) =>
      item.id == product.id ? x : item
    );
    setProducts(updatedProducts);
    closeModal();
  };
  const deleteProduct = (productId: string) => {
    setProducts((prevState) => {
      return prevState.filter((item) => item.id !== productId);
    });
  };

  const onFormSubmit = (
    productName: string,
    productPrice: string,
    productImageUrl: string
  ) => {
    editMode
      ? updateProduct(
          productName,
          productPrice,
          productImageUrl,
          selectedProduct!
        )
      : addNewProduct(productName, productPrice, productImageUrl);
  };
  return (
    <>
      {showModal && (
        <Modal
          close={closeModal}
          header={editMode ? "Editing Product" : "Adding Product"}
          darkmode={props.darkMode}
        >
          <ProductInputs
            onInputsSubmit={onFormSubmit}
            productData={selectedProduct}
          />
        </Modal>
      )}

      <div className="bg-gray-300 dark:bg-zinc-700 p-1 px-4">
        <Button onClick={() => setListingType(!listingType)}>
          {listingType ? (
            <FaList className="text-xl" />
          ) : (
            <BsFillGridFill className="text-xl" />
          )}
        </Button>
        <Button onClick={() => onAddProductHandler()}>
          <MdAddCircle className="text-xl" />
        </Button>
      </div>
      <ProductGrid
        products={products}
        listingType={listingType}
        selectProduct={onSelectProduct}
        deleteProduct={deleteProduct}
      />
    </>
  );
};
export default Products;
