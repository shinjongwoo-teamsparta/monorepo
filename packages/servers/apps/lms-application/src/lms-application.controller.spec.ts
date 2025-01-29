import { Test, TestingModule } from '@nestjs/testing';
import { LmsApplicationController } from './lms-application.controller';
import { LmsApplicationService } from './lms-application.service';

describe('LmsApplicationController', () => {
  let lmsApplicationController: LmsApplicationController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [LmsApplicationController],
      providers: [LmsApplicationService],
    }).compile();

    lmsApplicationController = app.get<LmsApplicationController>(
      LmsApplicationController,
    );
  });

  describe('root', () => {
    it('should return "Hello LMS Application!"', () => {
      expect(lmsApplicationController.getHello()).toBe(
        'Hello LMS Application!',
      );
    });
  });
});
