import { ApiProperty } from '@nestjs/swagger';

export class LessonDto {
  @ApiProperty({ description: '이미지' })
  readonly StarIcon: string;

  @ApiProperty({ description: '수업 코멘트' })
  readonly lessonComment: string;

  @ApiProperty({ description: '수업 설명' })
  readonly lessonExplain: string;

  @ApiProperty({ description: '선생님 이름' })
  readonly lessonTeacher: string;

  @ApiProperty({ description: '수업 평점' })
  readonly lessonScore: number;

  @ApiProperty({ description: '수업까지의 거리' })
  readonly lessonDistance: string;
}

  