import { Injectable } from '@nestjs/common';
import { CreateRegistroAnimaleDto } from './dto/create-registro-animale.dto';
import { UpdateRegistroAnimaleDto } from './dto/update-registro-animale.dto';
import { RegistroAnimale } from './entities/registro-animale.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class RegistroAnimalesService {
  constructor(
    @InjectRepository(RegistroAnimale)
    private readonly registroAnimaleRepository: Repository<RegistroAnimale>,
  ) {}

  async create(createRegistroAnimaleDto: CreateRegistroAnimaleDto) {
    const { razaAnimal, categoriaAnimal, ...CreateRegistroAnimaleDto } =
      createRegistroAnimaleDto;
    const newRegistroAnimale = this.registroAnimaleRepository.create({
      categoriaAnimal,
      razaAnimal,
      ...CreateRegistroAnimaleDto,
    });

    return await this.registroAnimaleRepository.save(newRegistroAnimale);
  }

  async findAll(): Promise<RegistroAnimale[]> {
    return await this.registroAnimaleRepository.find({
      relations: ['razaAnimal', 'categoriaAnimal'],
    });
  }

  findOne(id: number): Promise<RegistroAnimale> {
    return this.registroAnimaleRepository
      .createQueryBuilder('registroAnimale')
      .where('registroAnimale.id = :id', { id })
      .leftJoinAndSelect('registroAnimale.razaAnimal', 'razaAnimal')
      .leftJoinAndSelect('registroAnimale.categoriaAnimal', 'categoriaAnimal')
      .getOne();
  }

 async update(id: number, RegistroAnimale) {
    const findRegistroAnimale = await this.findOne(id);
    const updateRegistroAnimale =  await this.registroAnimaleRepository.merge(
      findRegistroAnimale,
      RegistroAnimale,
    );
    return await this.registroAnimaleRepository.save(updateRegistroAnimale);
  }

async  remove(id: number):Promise<void> {
    const findRegistroAnimale = await this.findOne(id);
    if (findRegistroAnimale) {
      throw new Error(`Registro con id ${id} no encontrado`);
    }
    await this.registroAnimaleRepository.delete(id);
  }
}
