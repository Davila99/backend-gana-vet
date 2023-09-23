import { Injectable } from '@nestjs/common';
import { CreateAlimentacionAnimaleDto } from './dto/create-alimentacion-animale.dto';
import { UpdateAlimentacionAnimaleDto } from './dto/update-alimentacion-animale.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { AlimentacionAnimale } from './entities/alimentacion-animale.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AlimentacionAnimalesService {

  constructor(
    @InjectRepository(AlimentacionAnimale)
    private readonly alimentacionAnimaleRepository: Repository<AlimentacionAnimale>,
  ) {}
 async create(createAlimentacionAnimaleDto: CreateAlimentacionAnimaleDto) {
    const alimentacionAnimale = this.alimentacionAnimaleRepository.create(createAlimentacionAnimaleDto);
    return await this.alimentacionAnimaleRepository.save(alimentacionAnimale);
  }

 async findAll():Promise<AlimentacionAnimale[]> {
    return await this.alimentacionAnimaleRepository.find();
  }

 async findOne(id: number):Promise<AlimentacionAnimale> {
    const alimentacionAnimale = await this.alimentacionAnimaleRepository.findOne(
      {where: {id: id}}
    );
    return alimentacionAnimale;
  }

 async update(id: number, updateAlimentacionAnimaleDto: UpdateAlimentacionAnimaleDto):Promise<AlimentacionAnimale> {
    const alimentacionAnimale = await this.alimentacionAnimaleRepository.preload({
      id: id,
      ...updateAlimentacionAnimaleDto,
    });
    return await this.alimentacionAnimaleRepository.save(alimentacionAnimale);

  }

async  remove(id: number):Promise<AlimentacionAnimale> {
    const alimentacionAnimale = await this.alimentacionAnimaleRepository.findOne(
      {where: {id: id}}
    );
    return await this.alimentacionAnimaleRepository.remove(alimentacionAnimale);
  }
}
