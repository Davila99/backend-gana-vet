import { Module } from '@nestjs/common';
import { AlimentacionAnimalesService } from './alimentacion-animales.service';
import { AlimentacionAnimalesController } from './alimentacion-animales.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AlimentacionAnimale } from './entities/alimentacion-animale.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AlimentacionAnimale])],
  controllers: [AlimentacionAnimalesController],
  providers: [AlimentacionAnimalesService],
})
export class AlimentacionAnimalesModule {}
