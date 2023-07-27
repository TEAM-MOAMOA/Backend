import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  const openApiBuilder = new DocumentBuilder()
    .setTitle('모아모아 API')
    .setDescription('모아모아 API 입니다.')
    .setVersion('1.0')
    .addTag('Lesson')
    .addTag('Teacher')
    .addTag('User')
    .build();

  const document = SwaggerModule.createDocument(app, openApiBuilder);
  SwaggerModule.setup('api', app, document);

  await app.listen(configService.get('PORT'));
}
bootstrap();
