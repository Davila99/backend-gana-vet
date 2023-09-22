import { Module } from '@nestjs/common';
import { ComercioAnimalesService } from './comercio-animales.service';
import { ComercioAnimalesController } from './comercio-animales.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ComercioAnimale } from './entities/comercio-animale.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ComercioAnimale])],
  controllers: [ComercioAnimalesController],
  providers: [ComercioAnimalesService],
})
export class ComercioAnimalesModule {}
