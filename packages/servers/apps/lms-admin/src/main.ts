import { NestFactory } from '@nestjs/core';
import { LmsAdminModule } from './lms-admin.module';

const PORT = process.env.PORT || 3217;

async function bootstrap() {
  const app = await NestFactory.create(LmsAdminModule);
  await app.listen(PORT);
}
bootstrap();
