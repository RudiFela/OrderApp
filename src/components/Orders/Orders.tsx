import { useState } from "react";
import OrderTable from "../OrdersTable/OrderTable";
import Order from "../../models/order";
const orders: Order[] = [
  new Order(
    "22/01/2022",
    new Date(),
    231,
    1,
    true,
    "Kamil",
    "Lisiecki",
    "Wróblewskiego",
    ["Banana", "Grape"]
  ),
  new Order(
    "21/01/2021",
    new Date(),
    31,
    2,
    false,
    "Kamil",
    "Lisiecki",
    "Wróblewskiego",
    ["Banana", "Apple", "Onion"]
  ),
  new Order(
    "21/01/2021",
    new Date(),
    31,
    4,
    false,
    "Kamil",
    "Lisiecki",
    "Wróblewskiego",
    ["Banana", "Apple", "Onion"]
  ),
  new Order(
    "21/01/2021",
    new Date(),
    31,
    3,
    false,
    "Kamil",
    "Lisiecki",
    "Wróblewskiego",
    ["Banana", "Apple", "Onion"]
  ),
  new Order(
    "21/01/2021",
    new Date(),
    31,
    3,
    true,
    "Kamil",
    "Lisiecki",
    "Wróblewskiego",
    ["Banana", "Apple", "Onion"]
  ),
  new Order(
    "21/01/2021",
    new Date(),
    31,
    3,
    false,
    "Kamil",
    "Lisiecki",
    "Wróblewskiego",
    ["Banana", "Apple", "Onion"]
  ),
  new Order(
    "21/01/2021",
    new Date(),
    31,
    4,
    false,
    "Kamil",
    "Lisiecki",
    "Wróblewskiego",
    ["Banana", "Apple", "Onion"]
  ),
  new Order(
    "21/01/2021",
    new Date(),
    31,
    4,
    true,
    "Kamil",
    "Lisiecki",
    "Wróblewskiego",
    ["Banana", "Apple", "Onion"]
  ),
];

const Orders = () => {
  const [ordersData, setOrdersData] = useState<Order[]>(orders);
  return (
    <div>
      <OrderTable ordersData={ordersData} />
    </div>
  );
};
export default Orders;
