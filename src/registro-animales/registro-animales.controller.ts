import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RegistroAnimalesService } from './registro-animales.service';
import { CreateRegistroAnimaleDto } from './dto/create-registro-animale.dto';
import { UpdateRegistroAnimaleDto } from './dto/update-registro-animale.dto';

@Controller('registro-animales')
export class RegistroAnimalesController {
  constructor(private readonly registroAnimalesService: RegistroAnimalesService) {}

  @Post()
  create(@Body() createRegistroAnimaleDto: CreateRegistroAnimaleDto) {
    return this.registroAnimalesService.create(createRegistroAnimaleDto);
  }

  @Get()
  findAll() {
    return this.registroAnimalesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.registroAnimalesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRegistroAnimaleDto: UpdateRegistroAnimaleDto) {
    return this.registroAnimalesService.update(+id, updateRegistroAnimaleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.registroAnimalesService.remove(+id);
  }
}
