import {
  IsNotEmpty,
  IsString,
  IsNumberString,
  IsOptional,
  IsNumber,
} from 'class-validator';
export class CreateAlimentacionAnimaleDto {
  @IsOptional()
  @IsNumberString()
  id: number;

  @IsNotEmpty()
  @IsString()
  nombreProducto: string;

  @IsNotEmpty()
  @IsNumber()
  energia: number;

  @IsNotEmpty()
  @IsNumber()
  proteina: number;
}
