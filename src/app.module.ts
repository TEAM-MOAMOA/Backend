import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MoaController } from './moa/moa.controller';
import { TeacherController } from './teacher/teacher.controller';
import { TalentListController } from './talent-list/talent-list.controller';
import { PostController } from './post/post.controller';
import { BoardController } from './board/board.controller';
import { ProfileController } from './profile/profile.controller';

@Module({
  imports: [],
  controllers: [AppController, MoaController, TeacherController, TalentListController, PostController, BoardController, ProfileController],
  providers: [AppService],
})

export class AppModule {}
