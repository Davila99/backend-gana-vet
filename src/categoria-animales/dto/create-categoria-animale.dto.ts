import { IsNotEmpty, IsString,  IsNumberString,
    IsOptional } from 'class-validator';

export class CreateCategoriaAnimaleDto {
@IsOptional()
 @IsNumberString()
 id: number;

  @IsNotEmpty()
  @IsString()
  descripcion: string;
}
