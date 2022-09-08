import React, { useRef } from "react";
import Product from "../../../models/product";
const ProductInputs: React.FC<{
  onInputsSubmit: any;
  productData?: Product;
}> = (props) => {
  const productNameInputRef = useRef<HTMLInputElement>(null);
  const productPriceInputRef = useRef<HTMLInputElement>(null);
  const productImageUrlInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredProductName = productNameInputRef.current!.value;
    const enteredProductPrice = productPriceInputRef.current!.value;
    const enteredProductImageUrl = productImageUrlInputRef.current!.value;
    props.onInputsSubmit(
      enteredProductName,
      enteredProductPrice,
      enteredProductImageUrl
    );
    productNameInputRef.current!.value = "";
    productPriceInputRef.current!.value = "";
    productImageUrlInputRef.current!.value = "";
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="grid gap-6 mb-6 md:grid-cols-2">
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Product Name
          </label>
          <input
            type="text"
            ref={productNameInputRef}
            id="product_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Product.."
            required
            defaultValue={props.productData?.name}
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Product Price
          </label>
          <input
            type="number"
            ref={productPriceInputRef}
            id="product_price"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="234 $"
            required
            defaultValue={props.productData?.price}
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Image(Url)
          </label>
          <input
            type="text"
            ref={productImageUrlInputRef}
            id="product_image"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="https://..."
            required
            defaultValue={props.productData?.image}
          />
        </div>
      </div>{" "}
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit
      </button>
    </form>
  );
};
export default ProductInputs;
