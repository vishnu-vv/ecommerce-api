export class CreateProductDto {
  name: string;
  price: number;
}

export class CreateOrderDto {
  userId: number;
  products: { id: number; quantity: number }[];
}
