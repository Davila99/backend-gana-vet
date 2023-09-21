import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ComercioAnimalesService } from './comercio-animales.service';
import { CreateComercioAnimaleDto } from './dto/create-comercio-animale.dto';
import { UpdateComercioAnimaleDto } from './dto/update-comercio-animale.dto';

@Controller('comercio-animales')
export class ComercioAnimalesController {
  constructor(private readonly comercioAnimalesService: ComercioAnimalesService) {}

  @Post()
  create(@Body() createComercioAnimaleDto: CreateComercioAnimaleDto) {
    return this.comercioAnimalesService.create(createComercioAnimaleDto);
  }

  @Get()
  findAll() {
    return this.comercioAnimalesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.comercioAnimalesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateComercioAnimaleDto: UpdateComercioAnimaleDto) {
    return this.comercioAnimalesService.update(+id, updateComercioAnimaleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.comercioAnimalesService.remove(+id);
  }
}
