import { Controller, Get, Post, Body, Param, UseGuards } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { JwtStrategy } from 'apps/auth/src/jwt.strategy';
import { CreateOrderDto } from '@common/dto';

@Controller('orders')
@UseGuards(JwtStrategy)
export class OrdersController {
  constructor(private ordersService: OrdersService) {}

  @Post()
  create(
    @Body()
    createOrderDto: CreateOrderDto,
  ) {
    return this.ordersService.create(createOrderDto);
  }

  @Get()
  findAll() {
    return this.ordersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ordersService.findOne(+id);
  }
}
