import { ApiProperty } from '@nestjs/swagger';

export class GetLessonsDto {
  @ApiProperty ({description: '페이지 수'})
  readonly page?: number;
    
  @ApiProperty ({description: '인원 수'})
  readonly limit?: number;
  
  @ApiProperty ({description: '검색어'})
  readonly search?: string;

  @ApiProperty ({description: '정렬 기준'})
  readonly sortBy?: string;

  @ApiProperty ({description: '정렬 순서'})
  readonly sortOrder?: 'asc' | 'desc';
}
  