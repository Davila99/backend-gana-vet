import { PartialType } from '@nestjs/mapped-types';
import { CreateCategoriaAnimaleDto } from './create-categoria-animale.dto';

export class UpdateCategoriaAnimaleDto extends PartialType(CreateCategoriaAnimaleDto) {}
