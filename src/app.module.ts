import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TalentListController } from './talent-list/talent-list.controller';
import { TeacherController } from './teacher/teacher.controller';
import { LessonController } from './lesson/lesson.controller';
import { PostController } from './post/post.controller';
import { UserController } from './user/user.controller';

@Module({
  imports: [],
  controllers: [
    AppController,
    TalentListController,
    TeacherController,
    LessonController,
    PostController,
    UserController,
  ],
  providers: [AppService],
})
export class AppModule {}
