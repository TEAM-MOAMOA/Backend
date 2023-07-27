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

   @Get('review-4.5')
  getTeachersWithReviewScore4_5(): { result: boolean; message: string; data: Teacher[] } {
    const filteredTeachers = this.teachers.filter((teacher) => teacher.reviewScore === 4.5);
    return { result: true, message: 'Review가 4.5인 선생님 목록을 조회합니다.', data: filteredTeachers };
  }

  @Get('popular')
  getPopularTeachers(): { result: boolean; message: string; data: Teacher[] } {
    const sortedTeachers = this.teachers.sort((a, b) => b.reviewScore - a.reviewScore);
    return { result: true, message: '인기 급상승한 선생님 목록을 조회합니다.', data: sortedTeachers };
  }

  @Get('nearby')
  getNearbyTeachers(): { result: boolean; message: string; data: Teacher[] } {
    // 여기에서 사용자의 위치 정보를 받아와서 선생님과의 거리를 계산하여 가까운 순서대로 정렬.
    // 하지만 거리 계산을 위한 기능은 여기서 구현 x
    return { result: true, message: '거리가 가까운 선생님 목록을 조회합니다.', data: this.teachers };
  }

}
