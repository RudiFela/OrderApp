import { useState } from "react";
import Modal from "../UI/Modal/Modal";
import Button from "../UI/Button/Button";
import Order from "../../models/order";
import { HiCurrencyDollar } from "react-icons/hi";
import OrderInputs from "../Orders/OrderInputs";
const OrderTableRows: React.FC<{ ordersData: Order[] }> = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [pickedOrder, setPickedOrder] = useState<Order>();
  const checkOrderStatus = (orderStatus: number) => {
    switch (orderStatus) {
      case 1:
        return "bg-red-300 dark:bg-red-900";
      case 2:
        return "bg-sky-300 dark:bg-sky-800";
      case 3:
        return "bg-green-300 dark:bg-green-800";
      case 4:
        return "bg-gray-300 dark:bg-gray-800";
    }
  };
  const onOrderSelect = (order: Order) => {
    setPickedOrder(order);
    setShowModal(true);
  };
  return (
    <>
      {showModal && (
        <Modal
          close={() => setShowModal(false)}
          header={`Order nr: ${pickedOrder?.id}`}
          darkmode={false}
        >
          <OrderInputs pickedOrder={pickedOrder!} />
        </Modal>
      )}
      <tbody>
        {props.ordersData.map((order) => (
          <tr
            key={order.id}
            onClick={() => onOrderSelect(order)}
            className={`${checkOrderStatus(
              order.status
            )}  duration-300 text-md font-bold text-gray-900 dark:text-white bg-white border-b hover:bg-zinc-400 dark:bg-gray-800 dark:border-gray-700 hover:dark:bg-zinc-700`}
          >
            <th scope="row" className="py-4 px-6   whitespace-nowrap ">
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
          </tr>
        ))}
      </tbody>
    </>
  );
};
export default OrderTableRows;
