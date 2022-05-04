import {
  Controller,
  Get,
  Param,
  Query,
  UsePipes,
  ParseIntPipe,
  ValidationPipe,
} from '@nestjs/common';
import { HttpCode, HttpStatus } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiExtraModels,
  ApiOkResponse,
  ApiParam,
  ApiTags,
  getSchemaPath,
} from '@nestjs/swagger';
//
import { Apartment } from 'src/entities/apartment.entity';
import { ApartmentsService } from './apartments.service';
import { FilterApartmentsDTO } from './dto/filter-apartments.dto';
import { FilteredApartmentDTO } from './dto/filtered-apartmen.dto';

@Controller('apartments')
@UsePipes(
  new ValidationPipe({
    transform: true,
  }),
)
@ApiTags('apartments')
export class ApartmentsController {
  constructor(private readonly apartmentsService: ApartmentsService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiExtraModels(FilteredApartmentDTO)
  @ApiOkResponse({
    description: 'Отфильтрованные квартиры',
    content: {
      'application/json': {
        schema: {
          properties: {
            pages: {
              type: 'number',
            },
            page: {
              type: 'number',
            },
            result: {
              type: 'array',
              items: {
                $ref: getSchemaPath(FilteredApartmentDTO),
              },
            },
          },
        },
      },
    },
  })
  @ApiBadRequestResponse({
    description: 'Некорректный запрос',
  })
  filterApartments(@Query() query: FilterApartmentsDTO) {
    return this.apartmentsService.filterApartments(query);
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  @ApiParam({
    name: 'id',
    schema: {
      type: 'number',
    },
    description: 'id квартиры',
  })
  @ApiExtraModels(Apartment)
  @ApiOkResponse({
    description: 'Найденная квартира',
    content: {
      'application/json': {
        schema: {
          $ref: getSchemaPath(Apartment),
        },
      },
    },
  })
  @ApiBadRequestResponse({
    description: 'Некорректный запрос',
  })
  getApartmentById(@Param('id', ParseIntPipe) id: number) {
    return this.apartmentsService.getApartmentById(id);
  }

  @Get('/floor/:floor/pos_on_floor/:pos_on_floor')
  @HttpCode(HttpStatus.OK)
  @ApiParam({
    name: 'floor',
    schema: {
      type: 'number',
    },
    description: 'этаж',
  })
  @ApiParam({
    name: 'pos_on_floor',
    schema: {
      type: 'number',
    },
    description: 'позиция на этаже',
  })
  @ApiExtraModels(Apartment)
  @ApiOkResponse({
    description: 'Найденная квартира',
    content: {
      'application/json': {
        schema: {
          $ref: getSchemaPath(Apartment),
        },
      },
    },
  })
  @ApiBadRequestResponse({
    description: 'Некорректный запрос',
  })
  getApartmentByFloorAndPosition(
    @Param('floor', ParseIntPipe) floor: number,
    @Param('pos_on_floor', ParseIntPipe) pos_on_floor: number,
  ) {
    return this.apartmentsService.getApartmentByFloorAndPosition(
      floor,
      pos_on_floor,
    );
  }
}
