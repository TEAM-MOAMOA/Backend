import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { NestApplication } from '@nestjs/core';

async function bootstrap() {
  const app: NestApplication = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('MOAmoa api')
    .setDescription('모아모아 api입니다')
    .setVersion('1.0')
    .addTag('users', 'User operations') // Add tags for your controllers here
    .addTag('board')
    .addTag('teacher')
    .addTag('popular')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
