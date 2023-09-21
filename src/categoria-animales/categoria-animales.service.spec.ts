import { Test, TestingModule } from '@nestjs/testing';
import { CategoriaAnimalesService } from './categoria-animales.service';

describe('CategoriaAnimalesService', () => {
  let service: CategoriaAnimalesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CategoriaAnimalesService],
    }).compile();

    service = module.get<CategoriaAnimalesService>(CategoriaAnimalesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
