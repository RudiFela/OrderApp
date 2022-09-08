class Order {
  id: string;
  date: Date;
  price: number;
  status: number;
  payment: boolean;
  ordererName: string;
  ordererLastname: string;
  adress: string;
  products: string[];
  constructor(
    orderId: string,
    orderDate: Date,
    orderPrice: number,
    orderStatus: number,
    orderPayment: boolean,
    orderOrdererName: string,
    orderOrdererLastname: string,
    orderAdress: string,
    orderProducts: string[]
  ) {
    this.id = orderId;
    this.date = orderDate;
    this.price = orderPrice;
    this.status = orderStatus;
    this.payment = orderPayment;
    this.ordererName = orderOrdererName;
    this.ordererLastname = orderOrdererLastname;
    this.adress = orderAdress;
    this.products = orderProducts;
  }
}
export default Order;
