import { type } from 'os';
import { Entity, Column, PrimaryGeneratedColumn, Double } from 'typeorm';
@Entity()
export class AlimentacionAnimale {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombreProducto: string;

  @Column( {type: "decimal"})
  energia: number;

  @Column( {type: "decimal"})
  proteina: number;
}
