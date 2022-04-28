import { Injectable } from '@nestjs/common';
//
import * as data from '../data/flats_data.json';

type UnitData = {
  id: number;
  floor: number;
  pos_on_floor: number;
  price: number;
  rooms: number;
  area_total: string;
  area_kitchen: string;
  area_live: string;
  layout_image: string;
};

@Injectable()
export class ApartmentsRepository {
  getAll() {
    return [...data];
  }
}
