import {
  IsNotEmpty,
  IsString,
  IsNumberString,
  IsOptional,
  IsObject,
} from 'class-validator';
import { CategoriaAnimale } from 'src/categoria-animales/entities/categoria-animale.entity';
import { Raza } from 'src/razas/entities/raza.entity';
export class CreateComercioAnimaleDto {
  @IsOptional()
  @IsNumberString()
  id: number;

  @IsNotEmpty()
  @IsString()
  foto: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  fotoFierro: string | null;


  @IsOptional()
  @IsNotEmpty()
  @IsString()
  numeroArete: string | null;

  @IsNotEmpty()
  @IsObject()
  razaAnimal: Raza[];

  @IsNotEmpty()
  @IsString()
  descripcionVenta: string;

  @IsNotEmpty()
  @IsString()
  propositoVenta: string;

  @IsNotEmpty()
  @IsString()
  edad: number;

  @IsNotEmpty()
  @IsString()
  peso: number;

  @IsNotEmpty()
  @IsString()
  precio: number;

  @IsNotEmpty()
  @IsObject()
  categoriaAnimal: CategoriaAnimale[];
}
