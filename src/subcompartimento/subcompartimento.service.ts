import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Subcompartimento } from './entities/subcompartimento.entity';

@Injectable()
export class SubcompartimentoService {
  constructor(
    @InjectRepository(Subcompartimento)
    private subcompartimentoRepository: Repository<Subcompartimento>,
  ) {}

  async create(subcompartimento: Subcompartimento) {
    try {
      return await this.subcompartimentoRepository.save(subcompartimento);
    } catch (error) {
      return error;
    }
  }

  async findAll() {
    try {
      return await this.subcompartimentoRepository.find();
    } catch (error) {
      return error;
    }
  }

  async findOne(id: number) {
    try {
      return await this.subcompartimentoRepository.find({
        where: { id_subcomp: id },
      });
    } catch (error) {
      return error;
    }
  }

  async update(id: number, subcompartimento: Subcompartimento) {
    try {
      return await this.subcompartimentoRepository.update(id, subcompartimento);
    } catch (error) {
      return error;
    }
  }

  async remove(id: number) {
    try {
      return await this.subcompartimentoRepository.delete(id);
    } catch (error) {
      return error;
    }
  }
}
