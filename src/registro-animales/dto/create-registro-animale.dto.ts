import {
  IsNotEmpty,
  IsString,
  IsNumberString,
  IsOptional,
  IsObject,
  IsNumber,
} from 'class-validator';
import { CategoriaAnimale } from 'src/categoria-animales/entities/categoria-animale.entity';
import { Raza } from 'src/razas/entities/raza.entity';
export class CreateRegistroAnimaleDto {
  @IsOptional()
  @IsNumberString()
  id: number;

  @IsNotEmpty()
  @IsString()
  foto : string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  numeroArete : string | null;

  @IsNotEmpty()
  @IsString()
  fechaNacimiento : string;

  @IsNotEmpty()
  @IsObject()
  razaAnimal: Raza[];

  @IsNotEmpty()
  @IsString()
  sexo : string;

  @IsNotEmpty()
  @IsString()
  color : string;

  @IsNotEmpty()
  @IsString()
  padres : string;

  @IsNotEmpty()
  @IsString()
  registroVacunas : string;

  @IsNotEmpty()
  @IsNumber()
  peso : number;

  @IsNotEmpty()
  @IsString()
  historialClinico : string;
  
  @IsNotEmpty()
  @IsString()
  estadoReproductivo : string;

  @IsNotEmpty()
  @IsObject()
  categoriaAnimal: CategoriaAnimale[];

}
