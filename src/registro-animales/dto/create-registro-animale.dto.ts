import {
  IsNotEmpty,
  IsString,
  IsNumberString,
  IsOptional,
} from 'class-validator';
export class CreateRegistroAnimaleDto {
  @IsOptional()
  @IsNumberString()
  id: number;

  @IsNotEmpty()
  @IsString()
  foto : string;

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

}
