import { Company } from './company.entity';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CompaniesService {
  constructor(
    @InjectRepository(Company)
    private companiesRepository: Repository<Company>,
  ) {}

  findAll(): Promise<Company[]> {
    return this.companiesRepository.find();
  }

  findOne(id: string): Promise<Company> {
    return this.companiesRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.companiesRepository.delete(id);
  }
}
