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
    const categoriaAnimal = this.categoriaAnimalRepository.create(CategoriaAnimaleDto);
    return this.categoriaAnimalRepository.save(categoriaAnimal);
  }

 async findAll(): Promise<CategoriaAnimale[]> {
    return await this.categoriaAnimalRepository.find();
  }
 async findOne(id: number): Promise<CategoriaAnimale> {	
    const categoriaAnimal = await this.categoriaAnimalRepository.findOne(
      { where: { id: id } },
    );
    return categoriaAnimal;
  }

 async update(id: number, updateCategoriaAnimaleDto: UpdateCategoriaAnimaleDto): Promise<CategoriaAnimale> {
    const categoriaAnimal = await this.categoriaAnimalRepository.preload({
      id: id,
      ...updateCategoriaAnimaleDto,
    });
    return this.categoriaAnimalRepository.save(categoriaAnimal);
  }

 async remove(id: number): Promise<CategoriaAnimale> {
    const categoriaAnimal = await this.categoriaAnimalRepository.findOne(
      { where: { id: id } },
    );
    return this.categoriaAnimalRepository.remove(categoriaAnimal);
  }
}
