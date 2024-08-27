import { Controller, Get, Post, Body, Param, UseGuards } from '@nestjs/common';
import { ProductsService } from './products.service';
import { JwtStrategy } from 'apps/auth/src/jwt.strategy';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  findAll() {
    return this.productsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(+id);
  }

  @Post()
  @UseGuards(JwtStrategy)
  create(@Body() createProductDto: { name: string; price: number }) {
    return this.productsService.create(createProductDto);
  }
}
