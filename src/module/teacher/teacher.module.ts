import { Module } from '@nestjs/common';
import { TeacherController } from './teacher.controller';
import { LessonModule } from '../lesson/lesson.module';

@Module({
  imports: [LessonModule],
  controllers: [TeacherController],
  providers: [],
})
export class TeacherModule {}
