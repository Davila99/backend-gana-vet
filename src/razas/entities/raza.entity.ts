import { RegistroAnimale } from 'src/registro-animales/entities/registro-animale.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
@Entity()
export class Raza {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  descripcion: string;

  @OneToMany(
    () => RegistroAnimale,
    (registroAnimale) => registroAnimale.categoriaAnimal,
  )
  registroAnimale: RegistroAnimale[];

  raza: Raza[];
}
