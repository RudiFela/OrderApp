import { Fragment } from "react";
import Modal from "../UI/Modal/Modal";
import Order from "../../models/order";
import OrderTableRows from "./OrderTableRows";
const columns = ["Nr", "Data", "Price", "Status", "Payment"];
const OrderTable: React.FC<{ ordersData: Order[] }> = (props) => {
  return (
    <div className="overflow-x-auto m-3 relative shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {columns.map((item, index) => (
              <Fragment key={index}>
                <th scope="col" className="py-3 px-6">
                  <div className="flex items-center">
                    {item}
                    <a href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-1 w-3 h-3"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 320 512"
                      >
                        <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"></path>
                      </svg>
                    </a>
                  </div>
                </th>
              </Fragment>
            ))}
          </tr>
        </thead>
        <OrderTableRows ordersData={props.ordersData} />
      </table>
    </div>
  );
};
export default OrderTable;
