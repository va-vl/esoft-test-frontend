import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
//
import { ApartmentsModule } from './apartments/apartments.module';
import { Apartment } from './entities/apartment.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      expandVariables: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
        return {
          type: 'postgres',
          url: configService.get('DB_URL'),
          entities: [Apartment],
          synchronize: false,
          logging: false,
        };
      },
      inject: [ConfigService],
    }),
    ApartmentsModule,
  ],
})
export class AppModule {}
