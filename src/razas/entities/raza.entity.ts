import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
@Entity()
export class Raza {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  descripcion: string;
}
