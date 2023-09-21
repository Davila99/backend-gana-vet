import { PartialType } from '@nestjs/mapped-types';
import { CreateRegistroAnimaleDto } from './create-registro-animale.dto';

export class UpdateRegistroAnimaleDto extends PartialType(CreateRegistroAnimaleDto) {}
