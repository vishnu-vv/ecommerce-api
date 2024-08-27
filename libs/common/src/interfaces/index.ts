export interface Product {
  id: number;
  name: string;
  price: number;
}

export interface Order {
  id: number;
  userId: number;
  products: { id: number; quantity: number }[];
  status: string;
}
