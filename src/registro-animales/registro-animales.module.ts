import { Module } from '@nestjs/common';
import { RegistroAnimalesService } from './registro-animales.service';
import { RegistroAnimalesController } from './registro-animales.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RegistroAnimale } from './entities/registro-animale.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RegistroAnimale])],
  controllers: [RegistroAnimalesController],
  providers: [RegistroAnimalesService],
})
export class RegistroAnimalesModule {}
