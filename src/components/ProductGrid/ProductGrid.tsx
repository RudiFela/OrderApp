import { useState } from "react";
import Modal from "../UI/Modal/Modal";
import Product from "../../models/product";
import ProductCard from "../ProductCard/ProductCard";
import ProductList from "../ProductList/ProductList";
const ProductGrid: React.FC<{
  products: Product[];
  listingType: boolean;
  deleteProduct: (productId: string) => void;
  selectProduct: (product: Product) => void;
}> = (props) => {
  return (
    <>
      {props.listingType ? (
        <div className="flex flex-row flex-wrap justify-center">
          {props.products.map((item) => (
            <ProductCard
              key={item.id}
              product={item}
              editProduct={props.selectProduct}
              deleteProduct={props.deleteProduct}
            />
          ))}
        </div>
      ) : (
        <ProductList
          products={props.products}
          editProduct={props.selectProduct}
          deleteProduct={props.deleteProduct}
        />
      )}
    </>
  );
};
export default ProductGrid;
