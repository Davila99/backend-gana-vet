import { Injectable } from '@nestjs/common';
import { CreateRegistroAnimaleDto } from './dto/create-registro-animale.dto';
import { UpdateRegistroAnimaleDto } from './dto/update-registro-animale.dto';

@Injectable()
export class RegistroAnimalesService {
  create(createRegistroAnimaleDto: CreateRegistroAnimaleDto) {
    return 'This action adds a new registroAnimale';
  }

  findAll() {
    return `This action returns all registroAnimales`;
  }

  findOne(id: number) {
    return `This action returns a #${id} registroAnimale`;
  }

  update(id: number, updateRegistroAnimaleDto: UpdateRegistroAnimaleDto) {
    return `This action updates a #${id} registroAnimale`;
  }

  remove(id: number) {
    return `This action removes a #${id} registroAnimale`;
  }
}
