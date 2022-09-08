import { useState } from "react";
import Modal from "../UI/Modal/Modal";
import Button from "../UI/Button/Button";
import Order from "../../models/order";
import { HiCurrencyDollar } from "react-icons/hi";
import OrderInputs from "../Orders/OrderInputs";
const OrderTableRows: React.FC<{ ordersData: Order[] }> = (props) => {
  const [showModal, setShowModal] = useState(false);
  const checkOrderStatus = (orderStatus: number) => {
    switch (orderStatus) {
      case 1:
        return "bg-blue-300 dark:bg-blue-800";
      default:
        return "";
    }
  };
  return (
    <>
      {showModal && (
        <Modal
          close={() => setShowModal(false)}
          header={"Order"}
          darkmode={false}
        >
          <OrderInputs />
        </Modal>
      )}
      <tbody>
        {props.ordersData.map((order) => (
          <tr
            key={order.id}
            onClick={() => setShowModal(true)}
            className={`${checkOrderStatus(
              order.status
            )}  duration-300 bg-white border-b hover:bg-zinc-300 dark:bg-gray-800 dark:border-gray-700 hover:dark:bg-zinc-700`}
          >
            <th
              scope="row"
              className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {order.id}
            </th>
            <td className="py-4 px-6">
              {order.date.toISOString().split("T")[0]}
            </td>
            <td className="py-4 px-6">{order.price} $</td>
            <td className="py-4 px-6">{order.status}</td>
            <td className="py-4 px-6">
              <HiCurrencyDollar
                className={`text-2xl bg-gray-200 rounded-full dark:bg-gray-300 ${
                  order.payment
                    ? "fill-green-500 dark:fill-green-700"
                    : "fill-red-500 dark:fill-red-700"
                }`}
              />
            </td>

            <td className="py-4 px-6 text-right">
              <Button onClick={() => console.log("Editing")}>Edit</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </>
  );
};
export default OrderTableRows;
