import { Test, TestingModule } from '@nestjs/testing';
import { ComercioAnimalesController } from './comercio-animales.controller';
import { ComercioAnimalesService } from './comercio-animales.service';

describe('ComercioAnimalesController', () => {
  let controller: ComercioAnimalesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ComercioAnimalesController],
      providers: [ComercioAnimalesService],
    }).compile();

    controller = module.get<ComercioAnimalesController>(ComercioAnimalesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
