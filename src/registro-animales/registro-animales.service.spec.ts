import { Test, TestingModule } from '@nestjs/testing';
import { RegistroAnimalesService } from './registro-animales.service';

describe('RegistroAnimalesService', () => {
  let service: RegistroAnimalesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RegistroAnimalesService],
    }).compile();

    service = module.get<RegistroAnimalesService>(RegistroAnimalesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
