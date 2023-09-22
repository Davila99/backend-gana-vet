import { Injectable } from '@nestjs/common';
import { CreateComercioAnimaleDto } from './dto/create-comercio-animale.dto';
import { UpdateComercioAnimaleDto } from './dto/update-comercio-animale.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ComercioAnimale } from './entities/comercio-animale.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ComercioAnimalesService {
  constructor(
    @InjectRepository(ComercioAnimale)
    private readonly comercioAnimaleRepository: Repository<ComercioAnimale>,
  ) {}

  async create(createComercioAnimaleDto: CreateComercioAnimaleDto) {
    const { razaAnimal, categoriaAnimal, ...CreateComercioAnimaleDto } =
      createComercioAnimaleDto;
    // const newComercioAnimale = this.comercioAnimaleRepository.create({
    //   categoriaAnimal,
    //   razaAnimal,
    //   ...CreateComercioAnimaleDto,
    // });
  }

  async findAll():Promise<ComercioAnimale[]> {
    return await this.comercioAnimaleRepository.find({
       relations: ['razaAnimal', 'categoriaAnimal'],
     });
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
