import { Controller, Get } from '@nestjs/common';
import { LmsApplicationService } from './lms-application.service';

@Controller()
export class LmsApplicationController {
  constructor(private readonly lmsApplicationService: LmsApplicationService) {}

  @Get()
  getHello(): string {
    return this.lmsApplicationService.getHello();
  }
}
