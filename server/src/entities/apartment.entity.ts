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
  @Column('real')
  price: number;

  @ApiProperty()
  @Column('integer')
  rooms: number;

  @ApiProperty()
  @Column('real')
  area_total: number;

  @ApiProperty()
  @Column('real')
  area_kitchen: number;

  @ApiProperty()
  @Column('real')
  area_live: number;

  @ApiProperty()
  @Column('varchar')
  layout_image: string;
}
