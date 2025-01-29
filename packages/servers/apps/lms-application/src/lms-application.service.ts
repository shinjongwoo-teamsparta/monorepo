import { Injectable } from '@nestjs/common';

@Injectable()
export class LmsApplicationService {
  getHello(): string {
    return 'Hello LMS Application!';
  }
}
