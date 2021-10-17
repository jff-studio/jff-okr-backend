import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  NestExpressApplication,
  ExpressAdapter,
} from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
    new ExpressAdapter(),
  );
  await app.listen(3000);
  console.log(`GraphQL is listening on http://localhost:3000!`);
}
bootstrap().catch(console.error);
