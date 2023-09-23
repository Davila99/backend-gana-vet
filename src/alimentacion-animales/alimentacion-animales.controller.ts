import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe
} from '@nestjs/common';
import { AlimentacionAnimalesService } from './alimentacion-animales.service';
import { CreateAlimentacionAnimaleDto } from './dto/create-alimentacion-animale.dto';
import { UpdateAlimentacionAnimaleDto } from './dto/update-alimentacion-animale.dto';

@Controller('alimentacion-animales')
export class AlimentacionAnimalesController {
  constructor(
    private readonly alimentacionAnimalesService: AlimentacionAnimalesService,
  ) {}

  @Post('/')
  create(@Body() createAlimentacionAnimaleDto: CreateAlimentacionAnimaleDto) {
    const alimentacionAnimales = this.alimentacionAnimalesService.create(
      createAlimentacionAnimaleDto,
    );
    const data = {
      data: alimentacionAnimales,
      message: 'Registro creado correctamente',
    };
    return data;
  }

  @Get('/')
  async findAll() {
    const alimentacionAnimales =
      await this.alimentacionAnimalesService.findAll();
    const data = {
      data: alimentacionAnimales,
    };
    return data;
  }

  @Get('/:id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    const alimentacionAnimales = this.alimentacionAnimalesService.findOne(id);
    const data = {
      data: alimentacionAnimales,
      message: 'Registro encontrado',
    };
    return data;
  }

  @Patch('/:id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateAlimentacionAnimaleDto: UpdateAlimentacionAnimaleDto,
  ) {
    const alimentacionAnimales = this.alimentacionAnimalesService.update(
      id,
      updateAlimentacionAnimaleDto,
    );
    const data = {
      data: alimentacionAnimales,
      message: 'Registro actualizado correctamente',
    };
    return data;
  }

  @Delete('/:id')
 async remove(@Param('id') id: number) {
   const alimentacionAnimales = await this.alimentacionAnimalesService.remove(id);
   const data = {
     data: alimentacionAnimales,
     message: 'Registro eliminado correctamente',
   };
   return data;
  }
}
