import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class RegistroAnimale {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    foto : string;

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
    
}
