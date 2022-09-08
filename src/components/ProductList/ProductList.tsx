import Product from "../../models/product";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BiEditAlt } from "react-icons/bi";
const ProductList: React.FC<{
  products: Product[];
  deleteProduct: (productId: string) => void;
  editProduct: (product: Product) => void;
}> = (props) => {
  return (
    <>
      <div className="m-3 overflow-x-auto relative shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-600 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">
                <span className="sr-only">Image</span>
              </th>
              <th scope="col" className="py-3 px-6">
                Product
              </th>

              <th scope="col" className="py-3 px-6">
                Price
              </th>
              <th scope="col" className="py-3 px-6">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {props.products.map((item) => (
              <tr
                key={item.id}
                className="bg-white border-b dark:bg-gray-900 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <td className="p-4 w-32">
                  <img className="rounded" src={item.image} alt="Apple Imac" />
                </td>
                <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                  {item.name}
                </td>

                <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                  {item.price}$
                </td>
                <td className="py-4 px-6 text-black dark:text-gray-100">
                  <BiEditAlt
                    onClick={() => props.editProduct(item)}
                    className="inline-block m-3   text-2xl bg-red rounded   cursor-pointer duration-500 hover:scale-150 hover:bg-gray-200 dark:hover:bg-gray-800"
                  />
                  <RiDeleteBin6Line
                    onClick={() => props.deleteProduct(item.id)}
                    className="inline-block m-3 text-2xl bg-red rounded  cursor-pointer duration-500 hover:scale-150 hover:bg-gray-200 dark:hover:bg-gray-800"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default ProductList;
