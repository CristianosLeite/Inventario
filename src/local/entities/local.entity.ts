import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  Column,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { Compartimento } from 'src/compartimento/entities/compartimento.entity';
import { ClienteFornecedor } from 'src/cliente-fornecedor/cliente-fornecedor.entity';

@Entity('locais')
export class Local {
  @PrimaryGeneratedColumn()
  id_local: number;

  @Column({ nullable: false })
  descricao: string;

  @OneToMany(() => Compartimento, (compartimento) => compartimento.local, {
    eager: true,
  })
  compartimentos: Compartimento[];

  @ManyToOne(() => ClienteFornecedor, { nullable: false })
  @JoinColumn({ name: 'cf_id' })
  clienteFornecedor: ClienteFornecedor;
}
