import { Injectable } from '@nestjs/common';
import { ApartmentsRepository } from './apartments.repository';

@Injectable()
export class ApartmentsService {
  constructor(private readonly apartmentsRepository: ApartmentsRepository) {}

  getAll() {
    return this.apartmentsRepository.getAll();
  }
}
