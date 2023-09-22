import { CategoriaAnimale } from 'src/categoria-animales/entities/categoria-animale.entity';
import { Raza } from 'src/razas/entities/raza.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, ManyToOne } from 'typeorm';
@Entity()
export class ComercioAnimale {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    foto : string;

    @Column({nullable: true})
    fotoFierro : string | null;

    @Column({nullable: true})
    numeroArete : string | null;

    @ManyToOne(() => Raza, (razaAnimale) => razaAnimale.raza)
    razaAnimal: Raza[];

    @Column()
    descripcionVenta : string;

    @Column()
    propositoVenta : string;

    @Column()
    edad : string;

    @Column()
    peso : number;

    @Column()
    precio : number;

    @ManyToOne(() => CategoriaAnimale, (categoriaAnimale) => categoriaAnimale.categoriaAnimal)
    categoriaAnimal: CategoriaAnimale[];
}
