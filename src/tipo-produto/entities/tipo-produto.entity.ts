import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Produto } from 'src/produto/entities/produto.entity';

@Entity('tipo_produto')
export class TipoProduto {
  @PrimaryGeneratedColumn()
  id_tipo_prod: number;

  @Column()
  desc_tipo_prod: string;

  @ManyToOne(() => Produto, (produto) => produto.tipoProduto)
  produto: Produto;
}
