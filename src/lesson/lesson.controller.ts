import { Controller, Get, Param, Query } from '@nestjs/common';
import { lesson } from './lesson.interface';

interface LessonDetail extends lesson {
  title: string;
  description: string;
  duration: number;
}

@Controller('lesson')
export class LessonController {
  private lessons: lesson[] = [
    { id: 1, category: 'music', teacher: 'sang hun', hashtag: '국악, 3~5세, 음악교사' },
    { id: 2, category: 'art', teacher: 'sal gu', hashtag: '동양화, 3~5세, 미술교사' },
    { id: 3, category: 'science', teacher: 'ta ill', hashtag: '생명, 3~5세, 과학교사' },
    // 다른 강의 데이터 추가 가능
  ];

  private lessonDetails: LessonDetail[] = [
    {
      id: 1,
      title: '피아노 기초 강의',
      description: '피아노 기본 연습 및 기초 음악 이론 강의',
      duration: 60,
      category: 'music',
      teacher: 'sang hun',
      hashtag: '국악, 3~5세, 음악교사',
    },
    {
      id: 2,
      title: '그림 그리기',
      description: '그림 그리는 기법과 색채 이론을 배우는 강의',
      duration: 90,
      category: 'art',
      teacher: 'sal gu',
      hashtag: '동양화, 3~5세, 미술교사',
    },
    {
      id: 3,
      title: '과학 실험',
      description: '재밌는 과학 실험을 통해 과학 원리를 이해하는 강의',
      duration: 120,
      category: 'science',
      teacher: 'ta ill',
      hashtag: '생명, 3~5세, 과학교사',
    },
    // 다른 강의 상세 데이터 추가 가능
  ];


//각 종 강의 리스트 api
  @Get()
  getAllLessons(): { result: boolean; data: lesson[]; message: string } {
    return { result: true, message: '각 종 강의 리스트를 조회합니다.', data: this.lessons };
  }

// 강의 상세 데이터 api
  @Get(':id')
  getLessonDetail(@Param('id') id: number): { result: boolean; data: LessonDetail; message: string } {
    const lessonDetail = this.lessonDetails.find((lesson) => lesson.id === id);

    if (!lessonDetail) {
      return { result: false, message: '해당 ID의 강의 상세 정보를 찾을 수 없습니다.', data: null };
    }

    return { result: true, message: '강의 상세 정보를 조회합니다.', data: lessonDetail };
  }

//검색 및 필터링 api
  @Get('search')
  searchLessons(
    @Query('category') category: string,
    @Query('teacher') teacher: string,
  ): { result: boolean; data: lesson[]; message: string } {
    let filteredLessons = this.lessons;

    if (category) {
      filteredLessons = filteredLessons.filter((lesson) => lesson.category.toLowerCase().includes(category.toLowerCase()));
    }

    if (teacher) {
      filteredLessons = filteredLessons.filter((lesson) => lesson.teacher.toLowerCase().includes(teacher.toLowerCase()));
    }

    return { result: true, message: '강의를 검색 및 필터링합니다.', data: filteredLessons };
  }
}
