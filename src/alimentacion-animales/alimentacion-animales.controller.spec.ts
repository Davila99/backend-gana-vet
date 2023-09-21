import { Test, TestingModule } from '@nestjs/testing';
import { AlimentacionAnimalesController } from './alimentacion-animales.controller';
import { AlimentacionAnimalesService } from './alimentacion-animales.service';

describe('AlimentacionAnimalesController', () => {
  let controller: AlimentacionAnimalesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AlimentacionAnimalesController],
      providers: [AlimentacionAnimalesService],
    }).compile();

    controller = module.get<AlimentacionAnimalesController>(AlimentacionAnimalesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
