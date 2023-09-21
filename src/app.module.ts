import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriaAnimalesModule } from './categoria-animales/categoria-animales.module';
import { CategoriaAnimale } from './categoria-animales/entities/categoria-animale.entity';
import { RegistroAnimalesModule } from './registro-animales/registro-animales.module';
import { RegistroAnimale } from './registro-animales/entities/registro-animale.entity';
import { ComercioAnimalesModule } from './comercio-animales/comercio-animales.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: '127.0.0.1',
    port: 5432,
    username: 'postgres',
    password: 'root',
    database: 'ganavet',
    entities: [CategoriaAnimale, RegistroAnimale],
    synchronize: true,
  }), CategoriaAnimalesModule, RegistroAnimalesModule, ComercioAnimalesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
