import { Injectable } from '@nestjs/common';
import { CreateAlimentacionAnimaleDto } from './dto/create-alimentacion-animale.dto';
import { UpdateAlimentacionAnimaleDto } from './dto/update-alimentacion-animale.dto';

@Injectable()
export class AlimentacionAnimalesService {
  create(createAlimentacionAnimaleDto: CreateAlimentacionAnimaleDto) {
    return 'This action adds a new alimentacionAnimale';
  }

  findAll() {
    return `This action returns all alimentacionAnimales`;
  }

  findOne(id: number) {
    return `This action returns a #${id} alimentacionAnimale`;
  }

  update(id: number, updateAlimentacionAnimaleDto: UpdateAlimentacionAnimaleDto) {
    return `This action updates a #${id} alimentacionAnimale`;
  }

  remove(id: number) {
    return `This action removes a #${id} alimentacionAnimale`;
  }
}
