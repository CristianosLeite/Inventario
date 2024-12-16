import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  Column,
} from 'typeorm';
import { Subcompartimento } from '../../subcompartimento/entities/subcompartimento.entity';
import { Local } from 'src/local/entities/local.entity';

@Entity('compartimentos')
export class Compartimento {
  @PrimaryGeneratedColumn()
  id_comp: number;

  @Column({ nullable: false })
  descricao: string;

  @OneToMany(
    () => Subcompartimento,
    (subcompartimento) => subcompartimento.compartimento,
    { nullable: true, eager: true },
  )
  subcompartimentos: Subcompartimento[];

  @ManyToOne(() => Local, (local) => local.compartimentos, { nullable: false })
  local: Local;
}
