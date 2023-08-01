// lesson.dto.ts

import { ApiProperty } from '@nestjs/swagger';

export class LessonFinishDto {
    @ApiProperty({ description: '알림 헤드라인', example: '정원 마감으로 모집이 마감됐습니다' })
    readonly Headline: string;
  
    @ApiProperty({ description: '강의 제목', example: '초등학생이 갖춰야 할 역사 지식의 모든 것' })
    readonly lessonTitle: string;
  
    @ApiProperty({ description: '강의 날짜', example: '1분 전' })
    readonly lessonDate: string;
  
    // 다른 필요한 데이터들 추가
  }
  

export class LessonParticipateDto {
  @ApiProperty({ description: '사용자 이름', example: '종훈 아빠님이 수업을 신청하였습니다' })
  readonly userName: string;

  @ApiProperty({ description: '강의 제목', example: '초등학생이 갖춰야 할 역사 지식의 모든 것' })
  readonly lessonTitle: string;

  @ApiProperty({ description: '강의 날짜', example: '5분 전' })
  readonly lessonDate: string;

  // 다른 필요한 데이터들 추가
}

export class LessonEndDto {
    @ApiProperty({ description: '알림 헤드라인', example: '수업이 완료됐습니다' })
    readonly Headline: string;
  
    @ApiProperty({ description: '강의 제목', example: '색칠 공부 어렵지 않아요. 동화 속 친구들을 그려봐요' })
    readonly lessonTitle: string;
  
    @ApiProperty({ description: '강의 날짜', example: '3일 전' })
    readonly lessonDate: string;
  
    // 다른 필요한 데이터들 추가
  }


export class LessonStartDto {
    @ApiProperty({ description: '알림 헤드라인', example: '수업 시작됐습니다.' })
    readonly Headline: string;
  
    @ApiProperty({ description: '강의 제목', example: '초등학생이 갖춰야 할 역사 지식의 모든 것' })
    readonly lessonTitle: string;
  
    @ApiProperty({ description: '강의 날짜', example: '3일 전' })
    readonly lessonDate: string;
  
    // 다른 필요한 데이터들 추가
  }

export class LessonSuccessDto {
    @ApiProperty({ description: '알림 헤드라인', example: '수업이 성사됐습니다' })
    readonly Headline: string;
  
    @ApiProperty({ description: '강의 제목', example: '색칠 공부 어렵지 않아요. 동화 속 친구들을 그려봐요' })
    readonly lessonTitle: string;
  
    @ApiProperty({ description: '강의 날짜', example: '4일 전' })
    readonly lessonDate: string;
  
    // 다른 필요한 데이터들 추가
  }

  export class LessonCancelDto {
    @ApiProperty({ description: '사용자 이름', example: '종훈 아빠님이 수업을 취소하였습니다' })
    readonly userName: string;
  
    @ApiProperty({ description: '강의 제목', example: '초등학생이 갖춰야 할 역사 지식의 모든 것' })
    readonly lessonTitle: string;
  
    @ApiProperty({ description: '취소 사유', example: '갑작스러운 일정 변경' })
    readonly cancelReason: string;
  
    // 다른 필요한 데이터들 추가
  }



