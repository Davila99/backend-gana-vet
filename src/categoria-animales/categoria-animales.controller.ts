import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CategoriaAnimalesService } from './categoria-animales.service';
import { CreateCategoriaAnimaleDto } from './dto/create-categoria-animale.dto';
import { UpdateCategoriaAnimaleDto } from './dto/update-categoria-animale.dto';

@Controller('categoria-animales')
export class CategoriaAnimalesController {
  constructor(private readonly categoriaAnimalesService: CategoriaAnimalesService) {}

  @Post()
 async create(@Body() createCategoriaAnimaleDto: CreateCategoriaAnimaleDto) {

    const categoriaAnimale = await this.categoriaAnimalesService.create(createCategoriaAnimaleDto);
    const data = {
      data:categoriaAnimale,
      message:'Categoria creada correctamente',
    };
    return data;
  }

  @Get('/')
 async findAll() {
    const categoriaAnimales = await this.categoriaAnimalesService.findAll();
    const data = {
      data:categoriaAnimales,
      message:' ok',
    };
    return data;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoriaAnimalesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCategoriaAnimaleDto: UpdateCategoriaAnimaleDto) {
    return this.categoriaAnimalesService.update(+id, updateCategoriaAnimaleDto);
  }

  @Delete('/:id')
 async remove(@Param('id') id: number) {
    
  const categoriaAnimale = await this.categoriaAnimalesService.remove(id);
  const data = {
    data:categoriaAnimale,
    message:'Categoria eliminada correctamente',
  };
  return data;
  }
}
