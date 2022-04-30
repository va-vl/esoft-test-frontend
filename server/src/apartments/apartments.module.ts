import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
//
import { ApartmentsController } from './apartments.controller';
import { ApartmentsService } from './apartments.service';
import { Apartment } from 'src/entities/apartment.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Apartment])],
  controllers: [ApartmentsController],
  providers: [ApartmentsService],
})
export class ApartmentsModule {}
