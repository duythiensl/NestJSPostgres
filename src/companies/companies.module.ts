import { Company } from './company.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { CompaniesController } from './companies.controller';
import { CompaniesService } from './companies.service';
import { CompanySubscriber } from './companies.subscriber';

@Module({
  imports: [TypeOrmModule.forFeature([Company])],
  controllers: [CompaniesController],
  providers: [CompaniesService,CompanySubscriber],
  exports: [TypeOrmModule]
})
export class CompaniesModule {}
