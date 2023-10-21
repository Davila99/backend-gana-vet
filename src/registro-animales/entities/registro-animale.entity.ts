import { CategoriaAnimale } from 'src/categoria-animales/entities/categoria-animale.entity';
import { Raza } from 'src/razas/entities/raza.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, ManyToOne } from 'typeorm';
@Entity()
export class RegistroAnimale {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    foto : string;

    @Column({nullable: true})
    numeroArete : string | null;

    @Column()
    fechaNacimiento : string;

    
    @ManyToOne(() => Raza, (razaAnimale) => razaAnimale.raza)
    razaAnimal: Raza[];

    @Column()
    sexo : string;

    @Column()
    registroVacunas : string;

    @Column()
    peso : number;

    @Column()
    historialClinico : string;
    
    @Column()
    estadoReproductivo : string;

    @ManyToOne(() => CategoriaAnimale, (categoriaAnimale) => categoriaAnimale.categoriaAnimal)
    
    categoriaAnimal: CategoriaAnimale[];
    
}
