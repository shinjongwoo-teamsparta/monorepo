import { Test, TestingModule } from '@nestjs/testing';
import { LmsAdminController } from './lms-admin.controller';
import { LmsAdminService } from './lms-admin.service';

describe('LmsAdminController', () => {
  let controller: LmsAdminController;
  let service: LmsAdminService;

  beforeEach(async () => {
    // 서비스를 모킹합니다
    const mockLmsAdminService = {
      getHello: jest.fn().mockResolvedValue('Hello Test'),
      concatToHello: jest.fn((message: string) => 'Hello Test ' + message),
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [LmsAdminController],
      providers: [
        {
          provide: LmsAdminService,
          useValue: mockLmsAdminService, // 모킹된 서비스를 주입
        },
      ],
    }).compile();

    controller = module.get<LmsAdminController>(LmsAdminController);
    service = module.get<LmsAdminService>(LmsAdminService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('getHello', () => {
    it('should return hello message', async () => {
      const result = await controller.getHello();
      expect(result).toBe('Hello Test');
      expect(service.getHello).toHaveBeenCalled();
    });
  });

  describe('concatToHello', () => {
    it('should return hello message with message', async () => {
      const result = await controller.concatToHello('message');
      expect(result).toBe('Hello Test message');
      expect(service.concatToHello).toHaveBeenCalledWith('message');
    });
  });
});
