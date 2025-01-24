
export interface Product {
    id: number;
    name: string;
    fileData: {
      name: string;
      price: number;
      baseLiquor: string;
      image: string;
    }[];
  }