import { Controller, Get, Post, Param, Body, NotFoundException } from '@nestjs/common';
import { Teacher } from './teacher.interface';

interface TeacherProfile {
  id: number;
  name: string;
  subject: string;
  reviews: TeacherReview[]; // 선생님의 리뷰 목록
  // 다른 선생님 프로필 관련 정보들
}

interface TeacherReview {
  id: number;
  userId: number; // 사용자의 ID
  rating: number;
  comment: string;
  // 다른 리뷰 관련 정보들
}

@Controller('teacher')
export class TeacherController {
  private teachers: Teacher[] = [
    { id: 1, name: 'sang hoon', age: 30, gender: 'Male', subject: 'Music', profileImage: 'profile1.jpg', reviewScore: 4.4 },
    { id: 2, name: 'ta ill', age: 20, gender: 'Male', subject: 'Art', profileImage: 'profile2.jpg', reviewScore: 4.5 },
    { id: 3, name: 'sal gu', age: 20, gender: 'Male', subject: 'Science', profileImage: 'profile3.jpg', reviewScore: 4.3 },
    // 다른 선생님 데이터들
  ];

  private teacherProfiles: TeacherProfile[] = []; // 선생님 프로필 정보를 저장할 배열

  private teacherReviewIdCounter = 1;

  @Post(':id/reviews')
  writeTeacherReview(
    @Param('id') teacherId: number,
    @Body() reviewData: TeacherReview,
  ): { result: boolean; data: TeacherReview; message: string } {
    const teacherProfile = this.teacherProfiles.find(
      (profile) => profile.id === teacherId,
    );

    if (!teacherProfile) {
      throw new NotFoundException('해당 ID의 선생님 프로필을 찾을 수 없습니다.');
    }

    const newReview: TeacherReview = {
      id: this.teacherReviewIdCounter++,
      userId: reviewData.userId,
      rating: reviewData.rating,
      comment: reviewData.comment,
      // 다른 리뷰 데이터들
    };

    teacherProfile.reviews.push(newReview);

    return { result: true, message: '선생님 프로필에 리뷰가 작성되었습니다.', data: newReview };
  }

  @Get(':id/reviews')
  getTeacherReviews(@Param('id') teacherId: number): { result: boolean; data: TeacherReview[]; message: string } {
    const teacherProfile = this.teacherProfiles.find(
      (profile) => profile.id === teacherId,
    );

    if (!teacherProfile) {
      throw new NotFoundException('해당 ID의 선생님 프로필을 찾을 수 없습니다.');
    }

    return { result: true, message: '선생님의 리뷰를 조회합니다.', data: teacherProfile.reviews };
  }

  @Get('review')
getReviewScoreTeachers(): { result: boolean; message: string; data: { popularTeachers: Teacher[]; reviewScore4_5Teachers: Teacher[] } } {
  const sortedTeachers = this.teachers.sort((a, b) => b.reviewScore - a.reviewScore);
  const filteredTeachers = this.teachers.filter((teacher) => teacher.reviewScore === 4.5);
  
  return { result: true, message: '인기 급상승한 선생님 목록과 Review가 4.5인 선생님 목록을 조회합니다.', data: { popularTeachers: sortedTeachers, reviewScore4_5Teachers: filteredTeachers } };
    }
}
