import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class Apartment {
  @ApiProperty()
  @PrimaryColumn('integer')
  id: number;

  @ApiProperty()
  @Column('integer')
  floor: number;

  @ApiProperty()
  @Column('integer')
  pos_on_floor: number;

  @ApiProperty()
  @Column('numeric')
  price: number;

  @ApiProperty()
  @Column('integer')
  rooms: number;

  @ApiProperty()
  @Column('numeric')
  area_total: number;

  @ApiProperty()
  @Column('numeric')
  area_kitchen: number;

  @ApiProperty()
  @Column('numeric')
  area_live: number;

  @ApiProperty()
  @Column('varchar')
  layout_image: string;
}
