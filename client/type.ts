export default interface Product {
  id: number;
  fileData: {
    name: string;
    price: number;
    baseLiquor: string;
    image: string;
  }[];
}
