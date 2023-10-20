import {
  IsNotEmpty,
  IsString,
  IsNumberString,
  IsOptional,
  IsNumber,
  IsDecimal,
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
  @IsDecimal()
  energia: number;

  @IsNotEmpty()
  @IsNumber()
  @IsDecimal()
  proteina: number;
}
