import {
  IsNotEmpty,
  IsString,
  IsNumberString,
  IsOptional,
  IsObject,
} from 'class-validator';
import { CategoriaAnimale } from 'src/categoria-animales/entities/categoria-animale.entity';
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
  @IsString()
  raza : string;

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
  @IsString()
  peso : string;

  @IsNotEmpty()
  @IsString()
  historialClinico : string;
  
  @IsNotEmpty()
  @IsString()
  estadoReproductivo : string;

  @IsNotEmpty()
  @IsObject()
  categoriaAniaml: CategoriaAnimale[];

}
