import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Order has been placed"', () => {
      const data = {
        large: 10,
        width: 20,
      };
      expect(appController.postOrder(data)).toEqual({
        message: 'Order has been placed',
        data,
      });
    });
  });
});
