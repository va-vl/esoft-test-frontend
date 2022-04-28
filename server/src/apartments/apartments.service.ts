import { Injectable } from '@nestjs/common';

@Injectable()
export class ApartmentsService {
  get() {
    return 'Apartments';
  }
}
