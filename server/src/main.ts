import { RequestMethod } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import helmet from 'helmet';
//
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api', {
    exclude: [{ path: '/doc', method: RequestMethod.GET }],
  });

  const config = new DocumentBuilder()
    .setTitle('Esoft-Test-Frontend')
    .setDescription('Тестовое задание для компании Esoft')
    .setVersion('1.0')
    .addTag('apartments')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('doc', app, document);

  app.enableCors();
  app.use(helmet());

  const configs = app.get(ConfigService);
  const port = configs.get('PORT') || 3000;

  await app.listen(port);
}

bootstrap();
