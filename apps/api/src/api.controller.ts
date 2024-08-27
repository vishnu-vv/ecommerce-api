import { Controller, All, Req } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Inject } from '@nestjs/common';

@Controller()
export class ApiController {
  constructor(
    @Inject('AUTH_SERVICE') private authClient: ClientProxy,
    @Inject('PRODUCT_SERVICE') private productClient: ClientProxy,
    @Inject('ORDER_SERVICE') private orderClient: ClientProxy,
  ) {}

  @All('auth/*')
  handleAuth(@Req() req) {
    const pattern = { cmd: req.method };
    return this.authClient.send(pattern, { ...req.params, ...req.body });
  }

  @All('products/*')
  handleProducts(@Req() req) {
    const pattern = { cmd: req.method };
    return this.productClient.send(pattern, { ...req.params, ...req.body });
  }

  @All('orders/*')
  handleOrders(@Req() req) {
    const pattern = { cmd: req.method };
    return this.orderClient.send(pattern, { ...req.params, ...req.body });
  }
}
