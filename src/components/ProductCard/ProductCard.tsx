import React from "react";
import Button from "../UI/Button/Button";
import Product from "../../models/product";
import { BiEditAlt } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
const ProductCard: React.FC<{
  product: Product;
  deleteProduct: (productId: string) => void;
  editProduct: (product: Product) => void;
}> = (props) => {
  return (
    <div className="w-full max-w-xs  m-3 px-5 pt-5 relative bg-white rounded-lg shadow-md dark:bg-gray-900 dark:border-gray-700">
      <span className="absolute ">
        <BiEditAlt
          onClick={() => props.editProduct(props.product)}
          className="inline-block text-2xl bg-transparent rounded m-3  cursor-pointer duration-500 hover:scale-150 hover:bg-gray-200"
        />
        <RiDeleteBin6Line
          onClick={() => props.deleteProduct(props.product.id)}
          className="inline-block m-3 text-2xl bg-transparent rounded  cursor-pointer duration-500 hover:scale-150 hover:bg-gray-200"
        />
      </span>
      <div className="aspect-w-16 aspect-h-9">
        <img
          className="rounded-lg w-full"
          src={props.product.image}
          alt="product image"
        />
      </div>
      <div className="px-5 pb-5 pt-5">
        <a href="#">
          <h5 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {props.product.name}
          </h5>
        </a>

        <div className="flex justify-between items-center">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            {props.product.price}$
          </span>
          <Button onClick={() => console.log(props.product.name)}>Add</Button>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
