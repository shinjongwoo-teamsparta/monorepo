import { NestFactory } from '@nestjs/core';
import { LmsApplicationModule } from './lms-application.module';

const PORT = process.env.PORT || 3216;

async function bootstrap() {
  const app = await NestFactory.create(LmsApplicationModule);
  await app.listen(PORT);
}
bootstrap();
