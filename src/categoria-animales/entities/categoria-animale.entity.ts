import { ComercioAnimale } from 'src/comercio-animales/entities/comercio-animale.entity';
import { RegistroAnimale } from 'src/registro-animales/entities/registro-animale.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
@Entity()
export class CategoriaAnimale {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    descripcion: string;

    @OneToMany(() => RegistroAnimale, (registroAnimale) => registroAnimale.categoriaAnimal)
    registroAnimale: RegistroAnimale[];

    @OneToMany(() => ComercioAnimale, (comercioAnimale) => comercioAnimale.id)
    comercioAnimale: ComercioAnimale[];
  
    categoriaAnimal: CategoriaAnimale[];
}

