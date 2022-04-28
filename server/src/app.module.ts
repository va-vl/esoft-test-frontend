import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { ApartmentsModule } from './apartments/apartments.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), ApartmentsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
