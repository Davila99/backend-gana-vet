import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriaAnimalesModule } from './categoria-animales/categoria-animales.module';
import { CategoriaAnimale } from './categoria-animales/entities/categoria-animale.entity';
import { RegistroAnimalesModule } from './registro-animales/registro-animales.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: '127.0.0.1',
    port: 5432,
    username: 'postgres',
    password: 'root',
    database: 'ganavet',
    entities: [CategoriaAnimale],
    synchronize: true,
  }), CategoriaAnimalesModule, RegistroAnimalesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
