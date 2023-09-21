import { Test, TestingModule } from '@nestjs/testing';
import { ComercioAnimalesService } from './comercio-animales.service';

describe('ComercioAnimalesService', () => {
  let service: ComercioAnimalesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ComercioAnimalesService],
    }).compile();

    service = module.get<ComercioAnimalesService>(ComercioAnimalesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
