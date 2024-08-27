import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { OrdersModule } from './orders.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    OrdersModule,
    {
      transport: Transport.REDIS,
      options: {
        host: 'redis://localhost',
        port: 6379,
      },
    },
  );
  await app.listen();
}
bootstrap();
