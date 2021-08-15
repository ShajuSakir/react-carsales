import { ValidationPipe } from '@nestjs/common';
import { BaseExceptionFilter, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //exception handler
  //app.useGlobalFilters(new BaseExceptionFilter());
  //to use class validation 
  app.useGlobalPipes(new ValidationPipe());

  //enable CORS, server able to work with front end. send req and get response from 1 domain to another 
  app.enableCors();
  await app.listen(process.env.PORT || 9000);
}
bootstrap();
