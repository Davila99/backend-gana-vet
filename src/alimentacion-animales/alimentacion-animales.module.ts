import { Module } from '@nestjs/common';
import { AlimentacionAnimalesService } from './alimentacion-animales.service';
import { AlimentacionAnimalesController } from './alimentacion-animales.controller';

@Module({
  controllers: [AlimentacionAnimalesController],
  providers: [AlimentacionAnimalesService],
})
export class AlimentacionAnimalesModule {}
