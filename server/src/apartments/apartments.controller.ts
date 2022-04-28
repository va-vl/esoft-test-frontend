import { Controller, Get } from '@nestjs/common';
import { HttpCode, HttpStatus } from '@nestjs/common';
import { ApartmentsService } from './apartments.service';

@Controller('apartments')
export class ApartmentsController {
  constructor(private readonly apartmentsService: ApartmentsService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  getApartments() {
    return this.apartmentsService.getAll();
  }
}
