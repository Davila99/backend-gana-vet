import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AlimentacionAnimalesService } from './alimentacion-animales.service';
import { CreateAlimentacionAnimaleDto } from './dto/create-alimentacion-animale.dto';
import { UpdateAlimentacionAnimaleDto } from './dto/update-alimentacion-animale.dto';

@Controller('alimentacion-animales')
export class AlimentacionAnimalesController {
  constructor(private readonly alimentacionAnimalesService: AlimentacionAnimalesService) {}

  @Post()
  create(@Body() createAlimentacionAnimaleDto: CreateAlimentacionAnimaleDto) {
    return this.alimentacionAnimalesService.create(createAlimentacionAnimaleDto);
  }

  @Get()
  findAll() {
    return this.alimentacionAnimalesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.alimentacionAnimalesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAlimentacionAnimaleDto: UpdateAlimentacionAnimaleDto) {
    return this.alimentacionAnimalesService.update(+id, updateAlimentacionAnimaleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.alimentacionAnimalesService.remove(+id);
  }
}
