import { Module } from '@nestjs/common';
import { ComercioAnimalesService } from './comercio-animales.service';
import { ComercioAnimalesController } from './comercio-animales.controller';

@Module({
  controllers: [ComercioAnimalesController],
  providers: [ComercioAnimalesService],
})
export class ComercioAnimalesModule {}
