import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  NotFoundException,
} from '@nestjs/common';
import { User } from './user.interface';

@Controller('users')
export class UserController {
  private users: User[] = [
    {
      id: 1,
      name: 'Sarah park',
      email: 'sahra@example.com',
      password: 'password123',
    },
    {
      id: 2,
      name: 'Jane lee',
      email: 'jane@example.com',
      password: 'password456',
    },
    // 다른 사용자 데이터들
  ];

  @Get(':id')
  getUserProfile(@Param('id') userId: number): {
    result: boolean;
    data: User;
    message: string;
  } {
    const user = this.users.find((user) => user.id === userId);

    if (!user) {
      throw new NotFoundException('해당 ID의 사용자를 찾을 수 없습니다.');
    }

    return { result: true, message: '사용자 프로필을 조회합니다.', data: user };
  }

  @Put(':id')
  updateUserProfile(
    @Param('id') userId: number,
    @Body() updatedUserData: User,
  ): { result: boolean; data: User; message: string } {
    const userIndex = this.users.findIndex((user) => user.id === userId);

    if (userIndex === -1) {
      throw new NotFoundException('해당 ID의 사용자를 찾을 수 없습니다.');
    }

    this.users[userIndex] = {
      ...this.users[userIndex],
      name: updatedUserData.name,
      email: updatedUserData.email,
      password: updatedUserData.password,
      // 다른 사용자 정보 업데이트
    };

    return {
      result: true,
      message: '사용자 프로필이 업데이트되었습니다.',
      data: this.users[userIndex],
    };
  }

  @Delete(':id')
  deleteUserProfile(@Param('id') userId: number): {
    result: boolean;
    message: string;
  } {
    const userIndex = this.users.findIndex((user) => user.id === userId);

    if (userIndex === -1) {
      throw new NotFoundException('해당 ID의 사용자를 찾을 수 없습니다.');
    }

    this.users.splice(userIndex, 1);

    return { result: true, message: '사용자 프로필이 삭제되었습니다.' };
  }

  @Post(':id/lessons/:lessonId/cancel')
  cancelLessonParticipation(
    @Param('id') userId: number,
    @Param('lessonId') lessonId: number,
  ): { result: boolean; message: string } {
    // 사용자가 강의 취소하는 로직 구현
    return { result: true, message: '강의 참여가 취소되었습니다.' };
  }

  @Post(':id/lessons/:lessonId/participate')
  participateInLesson(
    @Param('id') userId: number,
    @Param('lessonId') lessonId: number,
  ): { result: boolean; message: string } {
    // 사용자가 강의에 참여하는 로직 구현
    return { result: true, message: '강의에 참여하였습니다.' };
  }

  @Delete(':id/withdraw')
  withdrawUser(@Param('id') userId: number): {
    result: boolean;
    message: string;
  } {
    // 사용자가 회원 탈퇴하는 로직 구현
    return { result: true, message: '회원 탈퇴가 완료되었습니다.' };
  }
}
