import { Injectable } from '@nestjs/common';
import { CreateComercioAnimaleDto } from './dto/create-comercio-animale.dto';
import { UpdateComercioAnimaleDto } from './dto/update-comercio-animale.dto';

@Injectable()
export class ComercioAnimalesService {
  create(createComercioAnimaleDto: CreateComercioAnimaleDto) {
    return 'This action adds a new comercioAnimale';
  }

  findAll() {
    return `This action returns all comercioAnimales`;
  }

  findOne(id: number) {
    return `This action returns a #${id} comercioAnimale`;
  }

  update(id: number, updateComercioAnimaleDto: UpdateComercioAnimaleDto) {
    return `This action updates a #${id} comercioAnimale`;
  }

  remove(id: number) {
    return `This action removes a #${id} comercioAnimale`;
  }
}
