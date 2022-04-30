import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsArray,
  IsInt,
  IsNumber,
  IsOptional,
  IsString,
  Matches,
  Min,
} from 'class-validator';
//
import { IsGreaterThanOrEqual } from 'src/validators/is-greater-than-or-equal.validator';

export class FilterApartmentsDTO {
  @ApiProperty({
    title: 'floor',
    type: [Number],
    required: false,
    description: 'Этажи, на которых выбирается квартира',
  })
  @IsOptional()
  @Type(() => Number)
  @IsArray()
  @IsInt({ each: true })
  floor?: number[];

  @IsOptional()
  @Type(() => Number)
  @IsArray()
  @IsInt({ each: true })
  @Min(0, { each: true })
  @ApiProperty({
    title: 'room',
    type: [Number],
    required: false,
    description: 'Число комнат в квартире',
  })
  rooms?: number[];

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(0)
  @ApiProperty({
    title: 'price_min',
    type: Number,
    required: false,
    example: '3000000',
    description: 'Минимальная цена квартиры',
  })
  price_min?: number;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(0)
  @IsGreaterThanOrEqual('price_min', {
    message: 'price_max must be greater than or equal price_min',
  })
  @ApiProperty({
    title: 'price_max',
    type: Number,
    required: false,
    example: '5000000',
    description: 'Максимальная цена квартиры',
  })
  price_max?: number;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(0)
  @ApiProperty({
    title: 'area_total_min',
    type: Number,
    required: false,
    example: '30',
    description: 'Минимальная площадь квартиры',
  })
  area_total_min?: number;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(0)
  @IsGreaterThanOrEqual('area_total_min', {
    message: 'area_total_max must be greater than or equal area_total_min',
  })
  @ApiProperty({
    title: 'area_total_max',
    type: Number,
    required: false,
    example: '300',
    description: 'Максимальная площадь квартиры',
  })
  area_total_max?: number;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(0)
  @ApiProperty({
    title: 'area_kitchen_min',
    type: Number,
    required: false,
    example: '10',
    description: 'Минимальная площадь кухни',
  })
  area_kitchen_min?: number;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(0)
  @IsGreaterThanOrEqual('area_kitchen_min', {
    message: 'area_kitchen_max must be greater than or equal area_kitchen_min',
  })
  @ApiProperty({
    title: 'area_kitchen_max',
    type: Number,
    required: false,
    example: '100',
    description: 'Максимальная площадь кухни',
  })
  area_kitchen_max?: number;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(0)
  @ApiProperty({
    title: 'area_live_min',
    type: Number,
    required: false,
    example: '20',
    description: 'Минимальная жилая площадь',
  })
  area_live_min?: number;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(0)
  @IsGreaterThanOrEqual('area_live_min', {
    message: 'area_live_max must be greater than or equal area_live_min',
  })
  @ApiProperty({
    title: 'area_live_max',
    type: Number,
    required: false,
    example: '200',
    description: 'Максимальная жилая площадь',
  })
  area_live_max?: number;

  @IsString()
  @Matches(/(^price$)|(^rooms$)|(^area_total$)|(^area_live$)/, {
    message: 'sort_by must be price, rooms, area_total, area_live',
  })
  @ApiProperty({
    title: 'sort_by',
    enum: ['price', 'rooms', 'area_total', 'area_live'],
    required: true,
    example: 'price',
    description: 'Критерий сортировки',
  })
  sort_by: 'price' | 'rooms' | 'area_total' | 'area_live';

  @IsString()
  @Matches(/^(A|DE)SC$/, { message: 'sort_order must be ASC or DESC' })
  @ApiProperty({
    title: 'sort_order',
    enum: ['ASC', 'DESC'],
    required: true,
    example: 'ASC',
    description: 'Порядок сортировки',
  })
  sort_order: 'ASC' | 'DESC';

  @Type(() => Number)
  @IsInt()
  @Min(1)
  @ApiProperty({
    title: 'page',
    type: Number,
    required: true,
    minimum: 1,
    description: 'Страница',
  })
  page: number;
}
