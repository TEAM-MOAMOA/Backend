import { IsString, IsNumber, IsEnum, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

// 성별 열거형
enum Gender {
  MALE = '남성',
  FEMALE = '여성',
}

export class CreateTeacherProfileDto {
  @ApiProperty({ description: '아이 이름', example: '홍길동' })
  @IsNotEmpty()
  @IsString()
  childname: string;

  @ApiProperty({ description: '성별', enum: Gender, example: '남성' })
  @IsNotEmpty()
  @IsEnum(Gender)
  gender: Gender;

  @ApiProperty({ description: '나이대', example: 30 })
  @IsNotEmpty()
  @IsNumber()
  age: number;

  @ApiProperty({ description: '별점', example: 4.5 })
  @IsNotEmpty()
  @IsNumber()
  rating: number;

  @ApiProperty({ description: '거리', example: 3.2 })
  @IsNotEmpty()
  @IsNumber()
  distance: number;

  @ApiProperty({ description: '휴대폰 번호', example: '01012345678' })
  @IsNotEmpty()
  @IsString()
  phonenumber: string;

  @ApiProperty({ description: '장소', example: '서울시 강남구' })
  @IsNotEmpty()
  @IsString()
  place: string;
}
