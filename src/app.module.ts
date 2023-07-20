import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MoaController } from './moa/moa.controller';
import { TeacherController } from './teacher/teacher.controller';

@Module({
  imports: [],
  controllers: [AppController, MoaController, TeacherController],
  providers: [AppService],
})

export class AppModule {}
