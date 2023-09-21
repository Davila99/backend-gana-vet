import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class CategoriaAnimale {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    descripcion: string;
}

