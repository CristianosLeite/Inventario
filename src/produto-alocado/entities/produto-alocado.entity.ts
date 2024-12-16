import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  ManyToOne,
} from 'typeorm';
import { Produto } from 'src/produto/entities/produto.entity';
import { ClienteFornecedor } from 'src/cliente-fornecedor/cliente-fornecedor.entity';
import { Local } from 'src/local/entities/local.entity';

@Entity('produto_alocado')
export class ProdutoAlocado {
  @PrimaryGeneratedColumn()
  id_prod_alocado: number;

  @Column()
  qtd_prod_alocado: number;

  @Column()
  data_alocacao: Date;

  @Column()
  data_vencimento: Date;

  @ManyToOne(() => ClienteFornecedor)
  clienteFornecedor: ClienteFornecedor;

  @OneToOne(() => Produto, (produto) => produto.produtoAlocado)
  produto: Produto;

  @ManyToOne(() => Local)
  local: Local;
}
