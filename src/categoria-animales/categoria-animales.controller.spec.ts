import { Test, TestingModule } from '@nestjs/testing';
import { CategoriaAnimalesController } from './categoria-animales.controller';
import { CategoriaAnimalesService } from './categoria-animales.service';

describe('CategoriaAnimalesController', () => {
  let controller: CategoriaAnimalesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CategoriaAnimalesController],
      providers: [CategoriaAnimalesService],
    }).compile();

    controller = module.get<CategoriaAnimalesController>(CategoriaAnimalesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
