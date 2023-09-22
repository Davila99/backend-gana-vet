import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { ComercioAnimalesService } from './comercio-animales.service';
import { CreateComercioAnimaleDto } from './dto/create-comercio-animale.dto';
import { UpdateComercioAnimaleDto } from './dto/update-comercio-animale.dto';

@Controller('comercio-animales')
export class ComercioAnimalesController {
  constructor(
    private readonly comercioAnimalesService: ComercioAnimalesService,
  ) {}

  @Post('/')
   create(@Body() createComercioAnimaleDto: CreateComercioAnimaleDto) {
    const comercioAnimales = this.comercioAnimalesService.create(
      createComercioAnimaleDto,
    );
    const data = {
      data: comercioAnimales,
      message: 'Registro creado correctamente',
    };
    return data;
  }

  @Get('/')
  async findAll() {
    const comercioAnimales = await this.comercioAnimalesService.findAll();
    const data = {
      data: comercioAnimales,
    };
    return data;
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const comercioAnimales = await this.comercioAnimalesService.findOne(id);
    const data = {
      data: comercioAnimales,
      message: 'Registro encontrado',
    };
    return data;
  }

  @Patch(':id')
async  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateComercioAnimaleDto: UpdateComercioAnimaleDto,
  ) {
    const comercioAnimales = await this.comercioAnimalesService.update(
      id,
      updateComercioAnimaleDto,
    );
    const data = {
      data: comercioAnimales,
      message: 'Registro actualizado correctamente',
    };
    return data;
  }

  @Delete('/:id')
 async remove(@Param('id') id: number) {
  const comercioAnimales = await this.comercioAnimalesService.remove(id);
  const data = {
    data: comercioAnimales,
    message: 'Eliminado correctamente',
  };
  return data;
  }
}
