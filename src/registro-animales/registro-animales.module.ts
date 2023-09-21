import { Module } from '@nestjs/common';
import { RegistroAnimalesService } from './registro-animales.service';
import { RegistroAnimalesController } from './registro-animales.controller';

@Module({
  controllers: [RegistroAnimalesController],
  providers: [RegistroAnimalesService],
})
export class RegistroAnimalesModule {}
