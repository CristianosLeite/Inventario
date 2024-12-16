import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Compartimento } from './entities/compartimento.entity';

@Injectable()
export class CompartimentoService {
  constructor(
    @InjectRepository(Compartimento)
    private compartimentoRepository: Repository<Compartimento>,
  ) {}

  async create(compartimento: Compartimento) {
    try {
      return await this.compartimentoRepository.save(compartimento);
    } catch (error) {
      return error;
    }
  }

  async findAll() {
    try {
      return await this.compartimentoRepository.find();
    } catch (error) {
      return error;
    }
  }

  async findOne(id: number) {
    try {
      return await this.compartimentoRepository.find({
        where: { id_comp: id },
      });
    } catch (error) {
      return error;
    }
  }

  async update(id: number, compartimento: Compartimento) {
    try {
      return await this.compartimentoRepository.update(id, compartimento);
    } catch (error) {
      return error;
    }
  }

  async remove(id: number) {
    try {
      return await this.compartimentoRepository.delete(id);
    } catch (error) {
      return error;
    }
  }
}
