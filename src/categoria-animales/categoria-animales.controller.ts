import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
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

  @Get('/:id')
  async findOne(@Param('id', ParseIntPipe) id: number ) {

    const categoriaAnimale = await this.categoriaAnimalesService.findOne(id);
    const data = {
      data:categoriaAnimale,
      message:' ok',
    };
    return data;
  }

  @Patch('/:id')
  update(@Param('id', ParseIntPipe  ) id: number, @Body() updateCategoriaAnimaleDto: UpdateCategoriaAnimaleDto) {
    const categoriaAnimale = this.categoriaAnimalesService.update(id, updateCategoriaAnimaleDto);
    const data = {
      data:categoriaAnimale,
      message:'Categoria actualizada correctamente',
    };
    return data;
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
