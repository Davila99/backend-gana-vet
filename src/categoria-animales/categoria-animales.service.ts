import { Injectable } from '@nestjs/common';
import { CreateCategoriaAnimaleDto } from './dto/create-categoria-animale.dto';
import { UpdateCategoriaAnimaleDto } from './dto/update-categoria-animale.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoriaAnimale } from './entities/categoria-animale.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoriaAnimalesService {
  constructor(
    @InjectRepository(CategoriaAnimale)
    private categoriaAnimalRepository: Repository<CategoriaAnimale>,
  ) {}  
  async create(CategoriaAnimaleDto: CreateCategoriaAnimaleDto):Promise<CategoriaAnimale> {
    const ategoriaAnimal = this.categoriaAnimalRepository.create(CategoriaAnimaleDto);
    return this.categoriaAnimalRepository.save(ategoriaAnimal);
  }

 async findAll(): Promise<CategoriaAnimale[]> {
    return await this.categoriaAnimalRepository.find();
  }
  findOne(id: number) {
    return `This action returns a #${id} categoriaAnimale`;
  }

  update(id: number, updateCategoriaAnimaleDto: UpdateCategoriaAnimaleDto) {
    return `This action updates a #${id} categoriaAnimale`;
  }

 async remove(id: number) {
    
  }
}
