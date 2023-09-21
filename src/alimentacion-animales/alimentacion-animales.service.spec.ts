import { Test, TestingModule } from '@nestjs/testing';
import { AlimentacionAnimalesService } from './alimentacion-animales.service';

describe('AlimentacionAnimalesService', () => {
  let service: AlimentacionAnimalesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AlimentacionAnimalesService],
    }).compile();

    service = module.get<AlimentacionAnimalesService>(AlimentacionAnimalesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
