import { PartialType } from '@nestjs/mapped-types';
import { CreateComercioAnimaleDto } from './create-comercio-animale.dto';

export class UpdateComercioAnimaleDto extends PartialType(CreateComercioAnimaleDto) {}
