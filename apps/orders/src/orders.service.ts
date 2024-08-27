import { CreateOrderDto } from '@common/dto';
import { Order } from '@common/interfaces';
import { Injectable } from '@nestjs/common';

@Injectable()
export class OrdersService {
  private orders = [];

  create(order: CreateOrderDto) {
    const newOrder = {
      id: this.orders.length + 1,
      ...order,
      status: 'pending',
    };
    this.orders.push(newOrder);
    return newOrder;
  }

  findAll(): Order[] {
    return this.orders;
  }

  findOne(id: number): Order {
    return this.orders.find((order) => order.id === id);
  }
}
