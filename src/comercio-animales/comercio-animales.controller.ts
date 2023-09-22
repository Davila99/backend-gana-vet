import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
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
  async create(@Body() createComercioAnimaleDto: CreateComercioAnimaleDto) {
    const comercioAnimales = await this.comercioAnimalesService.create(
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
  findOne(@Param('id') id: string) {
    return this.comercioAnimalesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateComercioAnimaleDto: UpdateComercioAnimaleDto,
  ) {
    return this.comercioAnimalesService.update(+id, updateComercioAnimaleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.comercioAnimalesService.remove(+id);
  }
}
