import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Local } from './entities/local.entity';

@Injectable()
export class LocalService {
  constructor(
    @InjectRepository(Local)
    private localRepository: Repository<Local>,
  ) {}

  async create(local: Local): Promise<Local> {
    try {
      return await this.localRepository.save(local);
    } catch (error) {
      return error;
    }
  }

  async findAll(): Promise<Local[]> {
    try {
      return await this.localRepository.find({
        relations: ['compartimentos'],
      });
    } catch (error) {
      return error;
    }
  }

  async findOne(id: number): Promise<Local[]> {
    try {
      return await this.localRepository.find({
        where: { id_local: id },
        relations: ['compartimentos'],
      });
    } catch (error) {
      return error;
    }
  }

  async update(id: number, local: Local): Promise<Local> {
    try {
      return await this.localRepository.save({ ...local, id_local: id });
    } catch (error) {
      return error;
    }
  }

  async remove(id: number): Promise<void> {
    try {
      await this.localRepository.delete(id);
      return null;
    } catch (error) {
      return error;
    }
  }
}
