import { PickType } from '@nestjs/swagger';
//
import { Apartment } from 'src/entities/apartment.entity';

export class FilteredApartmentDTO extends PickType(Apartment, [
  'id',
  'rooms',
  'area_total',
  'layout_image',
] as const) {}
