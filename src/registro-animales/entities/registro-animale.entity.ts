import { CategoriaAnimale } from 'src/categoria-animales/entities/categoria-animale.entity';
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

    @Column()
    raza : string;

    @Column()
    sexo : string;

    @Column()
    color : string;

    @Column()
    padres : string;

    @Column()
    registroVacunas : string;

    @Column()
    peso : string;

    @Column()
    historialClinico : string;
    
    @Column()
    estadoReproductivo : string;

    @ManyToOne(() => CategoriaAnimale, (categoriaAnimale) => categoriaAnimale.categoriaAniaml)
    
    categoriaAniaml: CategoriaAnimale[];
    
}
