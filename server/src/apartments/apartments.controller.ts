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

@Controller('apartments')
@UsePipes(
  new ValidationPipe({
    transform: true,
  }),
)
@ApiTags('apartments')
@ApiExtraModels(Apartment)
export class ApartmentsController {
  constructor(private readonly apartmentsService: ApartmentsService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
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
            data: {
              type: 'array',
              items: {
                $ref: getSchemaPath(Apartment),
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
    return this.apartmentsService.getAll(query);
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
  getApartment(@Param('id', ParseIntPipe) id: number) {
    return this.apartmentsService.getApartmentById(id);
  }
}
