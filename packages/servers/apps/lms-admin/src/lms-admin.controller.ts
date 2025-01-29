import { Controller, Get, Query } from '@nestjs/common';
import { LmsAdminService } from './lms-admin.service';

@Controller()
export class LmsAdminController {
  constructor(private readonly lmsAdminService: LmsAdminService) {}

  @Get()
  getHello(): Promise<string> {
    return this.lmsAdminService.getHello();
  }

  @Get('concat')
  concatToHello(@Query('message') message: string): Promise<string> {
    return this.lmsAdminService.concatToHello(message);
  }
}
