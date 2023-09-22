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
    const newComercioAnimale = this.comercioAnimaleRepository.create({
      categoriaAnimal,
      razaAnimal,
      ...CreateComercioAnimaleDto,
    });

    return await this.comercioAnimaleRepository.save(newComercioAnimale);
    
  }

  async findAll():Promise<ComercioAnimale[]> {
    return await this.comercioAnimaleRepository.find({
       relations: ['razaAnimal', 'categoriaAnimal'],
     });
 }

 async findOne(id: number):Promise<ComercioAnimale> {
    return this.comercioAnimaleRepository.createQueryBuilder('comercioAnimale')
      .where('comercioAnimale.id = :id', { id })
      .leftJoinAndSelect('comercioAnimale.razaAnimal', 'razaAnimal')
      .leftJoinAndSelect('comercioAnimale.categoriaAnimal', 'categoriaAnimal')
      .getOne();
  }

 async update(id: number, updateComercioAnimaleDto: UpdateComercioAnimaleDto) {
    const findComercioAnimale = await this.findOne(id);
    const updateComercioAnimale =  await this.comercioAnimaleRepository.merge(
      findComercioAnimale,
      updateComercioAnimaleDto,
    );
    return await this.comercioAnimaleRepository.save(updateComercioAnimale);
  }

 async remove(id: number):Promise<ComercioAnimale> {
    const comercioAnimales = await this.findOne(id);
     return await this.comercioAnimaleRepository.remove(comercioAnimales);
  }
}
