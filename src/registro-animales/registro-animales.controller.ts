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
import { RegistroAnimalesService } from './registro-animales.service';
import { CreateRegistroAnimaleDto } from './dto/create-registro-animale.dto';
import { UpdateRegistroAnimaleDto } from './dto/update-registro-animale.dto';

@Controller('registro-animales')
export class RegistroAnimalesController {
  constructor(
    private readonly registroAnimalesService: RegistroAnimalesService,
  ) {}

  @Post('/')
  create(@Body() createRegistroAnimaleDto: CreateRegistroAnimaleDto) {
    const registroAnimales = this.registroAnimalesService.create(
      createRegistroAnimaleDto,
    );
    const data = {
      data: registroAnimales,
      message: 'Registro creado correctamente',
    };
    return data;
  }

  @Get('/')
  async findAll() {
    const registroAnimales = await this.registroAnimalesService.findAll();
    const data = {
      data: registroAnimales,
    };
    return data;
  }

  @Get('/:id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const registroAnimales = await this.registroAnimalesService.findOne(id);
    const data = {
      data: registroAnimales,
      message: 'Registro encontrado',
    };
    return data;
  }

  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateRegistroAnimaleDto: UpdateRegistroAnimaleDto,
  ) {
    const registroAnimales = await this.registroAnimalesService.update(
      id,
      updateRegistroAnimaleDto,
    );
    const data = {
      data: registroAnimales,
      message: 'Registro actualizado correctamente',
    };
    return data;
  }

  @Delete('/:id')
 async remove(@Param('id') id: number) {
    const registroAnimales = this.registroAnimalesService.remove(+id);
    const data = {
      data: registroAnimales,
      message: 'Registro eliminado correctamente',
    };
    return data;
  }
}
