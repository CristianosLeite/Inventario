import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('cliente_fornecedor')
export class ClienteFornecedor {
  @PrimaryGeneratedColumn()
  cf_id: number;
}
