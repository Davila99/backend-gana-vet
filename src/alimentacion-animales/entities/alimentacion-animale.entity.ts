import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class AlimentacionAnimale {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombreProducto: string;

  @Column()
  energia: number;

  @Column()
  proteina: number;
}
