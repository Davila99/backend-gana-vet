import { Injectable } from '@nestjs/common';
import { CreateRazaDto } from './dto/create-raza.dto';
import { UpdateRazaDto } from './dto/update-raza.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Raza } from './entities/raza.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RazasService {
  constructor(
    @InjectRepository(Raza)
    private RazaRepository: Repository<Raza>,
  ) {}
  async create(createRazaDto: CreateRazaDto) {
    const raza = this.RazaRepository.create(createRazaDto);
    return await this.RazaRepository.save(raza);
  }

  async findAll():Promise<Raza[]> {
    return await this.RazaRepository.find();
  }

 async findOne(id: number):Promise<Raza> {
    const raza = await this.RazaRepository.findOne(
      {where: {id: id} },
    );
    return raza;
  }

 async update(id: number, updateRazaDto: UpdateRazaDto):Promise<Raza> {
  const raza = await this.RazaRepository.preload({id, ...updateRazaDto});
  return await this.RazaRepository.save(raza);
    
  }

 async remove(id: number):Promise<Raza> {
    const raza = await this.RazaRepository.findOne(
      {where: {id: id} },
    );
    return await this.RazaRepository.remove(raza);
  }
}
