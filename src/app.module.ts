import { Module } from '@nestjs/common';
import { TeacherModule } from './module/teacher/teacher.module';
import { UserModule } from './module/user/user.module';
import { BoardModule } from './module/board/board.module';
import { PopularModule } from './module/popular/module/popular.module';
import { ConfigModule } from '@nestjs/config';
import { LessonController } from './module/lesson/lesson.controller';
import configuration from './config/configuration';


@Module({
  imports: [
    TeacherModule,
    UserModule,
    BoardModule,
    PopularModule,
    ConfigModule.forRoot({
      load: [configuration],
    }),
  ],
  controllers: [LessonController],
  providers: [],
})
export class AppModule {}
