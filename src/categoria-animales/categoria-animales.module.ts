import { Module } from '@nestjs/common';
import { CategoriaAnimalesService } from './categoria-animales.service';
import { CategoriaAnimalesController } from './categoria-animales.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriaAnimale } from './entities/categoria-animale.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CategoriaAnimale])],
  controllers: [CategoriaAnimalesController],
  providers: [CategoriaAnimalesService],
})
export class CategoriaAnimalesModule {}
