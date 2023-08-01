// src/popular/popular.service.ts
import { Injectable } from '@nestjs/common';
import { LessonData, Teacher } from './interface/popular.interface';

const popularlist: LessonData[] = [{
  StarIcon: '<StarIcon/>',
  lessonComment: '솜사탕 같이 만들어볼까요?',
  lessonExplain: '아이들에게 꿈같은 시간을 선물합니다.',
  lessonTeacher: '살구 아빠',
  lessonScore: 4.2,
  lessonDistance: '~234m',
},{
  StarIcon: '<StarIcon/>',
  lessonComment: '솜사탕 같이 만들어볼까요?',
  lessonExplain: '아이들에게 꿈같은 시간을 선물합니다.',
  lessonTeacher: '살구 엄마',
  lessonScore: 4.2,
  lessonDistance: '~234m',
},{
  StarIcon: '<StarIcon/>',
  lessonComment: '솜사탕 같이 만들어볼까요?',
  lessonExplain: '아이들에게 꿈같은 시간을 선물합니다.',
  lessonTeacher: '미희 엄마',
  lessonScore: 4.2,
  lessonDistance: '~234m',
},
{
  StarIcon: '<StarIcon/>',
  lessonComment: '솜사탕 같이 만들어볼까요?',
  lessonExplain: '아이들에게 꿈같은 시간을 선물합니다.',
  lessonTeacher: '준수 아빠',
  lessonScore: 4.2,
  lessonDistance: '~234m',
},{
  StarIcon: '<StarIcon/>',
  lessonComment: '솜사탕 같이 만들어볼까요?',
  lessonExplain: '아이들에게 꿈같은 시간을 선물합니다.',
  lessonTeacher: '도원 아빠',
  lessonScore: 4.2,
  lessonDistance: '~234m',
},{
  StarIcon: '<StarIcon/>',
  lessonComment: '솜사탕 같이 만들어볼까요?',
  lessonExplain: '아이들에게 꿈같은 시간을 선물합니다.',
  lessonTeacher: '주원 엄마',
  lessonScore: 4.2,
  lessonDistance: '~234m',
}
]
const dummyCategory: Teacher[] = [
  {
    StarIcon: '<StarIcon/>',
    lessonTeacher: '유나엄마',
    age: '30대 여성',
    lessonScore: 4.2,
    lessonDistance: '~234m',
    tag: '줄넘기, 5~7세, 체육교사',
    category: '운동'
  },{
    StarIcon: '<StarIcon/>',
    lessonTeacher: '유나엄마',
    age: '30대 여성',
    lessonScore: 4.2,
    lessonDistance: '~234m',
    tag: '줄넘기, 5~7세, 체육교사',
    category: '운동'
  },{
    StarIcon: '<StarIcon/>',
    lessonTeacher: '유나엄마',
    age: '30대 여성',
    lessonScore: 4.2,
    lessonDistance: '~234m',
    tag: '줄넘기, 5~7세, 체육교사',
    category: '운동'
  },{
    StarIcon: '<StarIcon/>',
    lessonTeacher: '유나엄마',
    age: '30대 여성',
    lessonScore: 4.2,
    lessonDistance: '~234m',
    tag: '줄넘기, 5~7세, 체육교사',
    category: '운동'
  },{
    StarIcon: '<StarIcon/>',
    lessonTeacher: '유나엄마',
    age: '30대 여성',
    lessonScore: 4.2,
    lessonDistance: '~234m',
    tag: '줄넘기, 5~7세, 체육교사',
    category: '운동'
  },{
    StarIcon: '<StarIcon/>',
    lessonTeacher: '유나엄마',
    age: '30대 여성',
    lessonScore: 4.2,
    lessonDistance: '~234m',
    tag: '줄넘기, 5~7세, 체육교사',
    category: '운동'
  },
]
const dummyTeachers: Teacher[] = [
  {
    StarIcon: '<StarIcon/>',
    lessonTeacher: '준희 아빠',
    category: '기타',
    lessonScore: 4.5,
    lessonDistance: '~234m',
  },{
    StarIcon: '<StarIcon/>',
    lessonTeacher: '타일 아빠',
    category: '언어',
    lessonScore: 4.5,
    lessonDistance: '~234m',
  },{
    StarIcon: '<StarIcon/>',
    lessonTeacher: '지민 엄마',
    category: '기타',
    lessonScore: 4.5,
    lessonDistance: '~234m',
  },{
    StarIcon: '<StarIcon/>',
    lessonTeacher: '가인 엄마',
    category: '미술',
    lessonScore: 4.5,
    lessonDistance: '~234m',
  }
];

@Injectable()
export class PopularService {
  getTeachersByCategory(category: string): Teacher[] {
    // 실제 데이터 소스와 연동하여 카테고리에 맞는 선생님 목록을 가져오는 로직 구현
    // 이 예제에서는 더미데이터를 사용합니다.
    return dummyCategory.filter((teacher) => teacher.category === category);
  }

  getTeachersBySortOrder(sortBy: string): Teacher[] {
    // 실제 데이터 소스와 연동하여 인기순, 추천순, 거리순으로 선생님 목록을 가져오는 로직 구현
    // 이 예제에서는 더미데이터를 사용합니다.
    switch (sortBy) {
      case 'popular':
        return popularlist.sort((a, b) => b.lessonScore - a.lessonScore);
      case 'recommended':
        return dummyTeachers.filter((teacher) => teacher.lessonScore);
      case 'distance':
        return popularlist.sort((a, b) => a.lessonDistance.localeCompare(b.lessonDistance));
      default:
        return [];
    }
  }
}
