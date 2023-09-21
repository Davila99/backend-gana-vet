import { Module } from '@nestjs/common';
import { RazasService } from './razas.service';
import { RazasController } from './razas.controller';

@Module({
  controllers: [RazasController],
  providers: [RazasService],
})
export class RazasModule {}
