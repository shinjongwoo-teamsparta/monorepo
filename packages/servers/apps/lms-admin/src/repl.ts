import { repl } from '@nestjs/core';
import { LmsAdminModule } from './lms-admin.module';

async function bootstrap() {
  const replServer = await repl(LmsAdminModule);
  replServer.setupHistory('.nestjs_repl_history', (err) => {
    if (err) {
      console.error(err);
    }
  });
}

bootstrap();
