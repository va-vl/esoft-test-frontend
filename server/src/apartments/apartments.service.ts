import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  In,
  Between,
  Repository,
  FindOneOptions,
  MoreThanOrEqual,
  LessThanOrEqual,
} from 'typeorm';
//
import { ITEMS_PER_PAGE } from '../common/constants';
import { Apartment } from '../entities/apartment.entity';
import { FilterApartmentsDTO } from './dto/filter-apartments.dto';

@Injectable()
export class ApartmentsService {
  constructor(
    @InjectRepository(Apartment)
    private readonly apartmentsRepository: Repository<Apartment>,
  ) {}

  async getAll(filterApartmentsDTO: FilterApartmentsDTO) {
    const { sort_by, sort_order, page } = filterApartmentsDTO;

    const where: FindOneOptions<Apartment>['where'] = {};

    this.assignArrayToWhereObject(where, 'floor', filterApartmentsDTO);
    this.assignArrayToWhereObject(where, 'rooms', filterApartmentsDTO);
    this.assignBoundariesToWhereObject(where, 'price', filterApartmentsDTO);
    this.assignBoundariesToWhereObject(
      where,
      'area_total',
      filterApartmentsDTO,
    );
    this.assignBoundariesToWhereObject(
      where,
      'area_kitchen',
      filterApartmentsDTO,
    );
    this.assignBoundariesToWhereObject(where, 'area_live', filterApartmentsDTO);

    const [result, total] = await this.apartmentsRepository.findAndCount({
      where,
      order: {
        [sort_by]: sort_order,
      },
      take: ITEMS_PER_PAGE,
      skip: (page - 1) * ITEMS_PER_PAGE,
    });

    return {
      data: result,
      pages: Math.ceil(total / ITEMS_PER_PAGE),
      page,
    };
  }

  getApartmentById(id: number) {
    return this.apartmentsRepository.findOne(id);
  }

  private assignArrayToWhereObject(
    whereObject: FindOneOptions<Apartment>['where'],
    property: keyof Apartment,
    dto: FilterApartmentsDTO,
  ) {
    const value = dto[property];
    if (value !== undefined) {
      whereObject[property] = In(value);
    }
  }

  private assignBoundariesToWhereObject(
    whereObject: FindOneOptions<Apartment>['where'],
    property: keyof Apartment,
    dto: FilterApartmentsDTO,
  ) {
    const min_value = dto[`${property}_min`];
    const max_value = dto[`${property}_max`];

    if (min_value !== undefined) {
      if (max_value !== undefined) {
        whereObject[property] = Between(min_value, max_value);
      } else {
        whereObject[property] = MoreThanOrEqual(min_value);
      }
    } else if (max_value !== undefined) {
      whereObject[property] = LessThanOrEqual(max_value);
    }
  }
}
