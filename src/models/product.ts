class Product {
  id: string;
  name: string;
  image: string;
  price: string;

  constructor(productName: string, productImage: string, productPrice: string) {
    this.id = Math.random().toString();
    this.name = productName;
    this.image = productImage;
    this.price = productPrice;
  }
}
export default Product;
