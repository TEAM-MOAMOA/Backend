import { Module } from '@nestjs/common';
import { LessonModule } from './module/lesson/lesson.module';
import { TalentListModule } from './module/talent-list/talent-list.module';
import { TeacherModule } from './module/teacher/teacher.module';
import { UserModule } from './module/user/user.module';
import { PostModule } from './module/post/post.module';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';

@Module({
  imports: [
    LessonModule,
    TalentListModule,
    TeacherModule,
    UserModule,
    PostModule,
    ConfigModule.forRoot({
      load: [configuration],
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
