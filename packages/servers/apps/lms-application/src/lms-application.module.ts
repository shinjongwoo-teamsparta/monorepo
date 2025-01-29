import { Module } from '@nestjs/common';
import { LmsApplicationController } from './lms-application.controller';
import { LmsApplicationService } from './lms-application.service';
import { ChildrenModule } from 'libs/children/children.module';
import { CommonModule } from '@app/common';

@Module({
  imports: [CommonModule, ChildrenModule],
  controllers: [LmsApplicationController],
  providers: [LmsApplicationService],
})
export class LmsApplicationModule {}
