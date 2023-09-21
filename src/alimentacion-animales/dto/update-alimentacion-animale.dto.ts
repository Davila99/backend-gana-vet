import { PartialType } from '@nestjs/mapped-types';
import { CreateAlimentacionAnimaleDto } from './create-alimentacion-animale.dto';

export class UpdateAlimentacionAnimaleDto extends PartialType(CreateAlimentacionAnimaleDto) {}
