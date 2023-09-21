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
import { RazasService } from './razas.service';
import { CreateRazaDto } from './dto/create-raza.dto';
import { UpdateRazaDto } from './dto/update-raza.dto';

@Controller('razas')
export class RazasController {
  constructor(private readonly razasService: RazasService) {}

  @Post()
  async create(@Body() createRazaDto: CreateRazaDto) {
    const raza = await this.razasService.create(createRazaDto);
    const data = {
      data: raza,
      message: 'Registro creado',
    };
    return data;
  }

  @Get()
 async findAll() {
   
  const razas = await this.razasService.findAll();
  const data = {
    data: razas,
    message: 'Registros obtenidos',
  };
  return data;
  }

  @Get('/:id')
 async findOne(@Param('id', ParseIntPipe) id: number) {
  const raza = await this.razasService.findOne(id);
  const data = {
    data: raza,
    message: 'Registro obtenido',
  };
  return data;
  }

  @Patch('/:id')
  async update(@Param('id', ParseIntPipe) id: string, @Body() updateRazaDto: UpdateRazaDto) {
    const raza = await this.razasService.update(+id, updateRazaDto);
    const data = {
      data: raza,
      message: 'Registro actualizado',
    };
    return data;
  }

  @Delete('/:id')
 async remove(@Param('id') id: number) {
  const raza = await this.razasService.remove(id);
  const data = {
    data: raza,
    message: 'Registro eliminado exitosamente',
  };
  return data;
  }
}
