import { Test, TestingModule } from '@nestjs/testing';
import { MoaController } from './moa.controller';

describe('MoaController', () => {
  let controller: MoaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MoaController],
    }).compile();

    controller = module.get<MoaController>(MoaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
