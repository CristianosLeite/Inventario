import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Compartimento } from '../../compartimento/entities/compartimento.entity';

@Entity('subcompartimento')
export class Subcompartimento {
  @PrimaryGeneratedColumn()
  id_subcomp: number;

  @Column({ nullable: false })
  descricao: string;

  @ManyToOne(
    () => Compartimento,
    (compartimento) => compartimento.subcompartimentos,
    { nullable: false },
  )
  compartimento: Compartimento;
}
