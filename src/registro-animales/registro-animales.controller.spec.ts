import { Test, TestingModule } from '@nestjs/testing';
import { RegistroAnimalesController } from './registro-animales.controller';
import { RegistroAnimalesService } from './registro-animales.service';

describe('RegistroAnimalesController', () => {
  let controller: RegistroAnimalesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RegistroAnimalesController],
      providers: [RegistroAnimalesService],
    }).compile();

    controller = module.get<RegistroAnimalesController>(RegistroAnimalesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
