import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBody, ApiResponse } from '@nestjs/swagger';
import { LessonParticipate, LessonCancel, LessonStart, LessonFinish, LessonSuccess, LessonEnd } from './lesson.interface';
import { LessonCancelDto, LessonParticipateDto, LessonStartDto, LessonFinishDto, LessonSuccessDto, LessonEndDto } from './dto/lesson.dto';

@Controller('lesson')
@ApiTags('lesson')
export class LessonController {
  // 강의 참여 알림 API
  @Post('participate')
  @ApiOperation({ summary: '강의 참여 알림', description: '사용자의 강의 참여 알림을 전달합니다.' })
  @ApiBody({ type: LessonParticipateDto, description: '강의 참여 알림 데이터' })
  @ApiResponse({ status: 200, description: '성공적으로 강의 참여 알림을 전달했습니다.', type: LessonParticipateDto })
  @ApiResponse({
    status: 404,
    description: '해당 데이터를 가져올 수 없습니다',
  })
  sendLessonParticipateNotification(
    @Body() lessonParticipate: LessonParticipate,
  ): { result: boolean; data: LessonParticipate; message: string } {
    // 알림 메시지를 처리하는 로직 작성

    return { result: true, message: '강의 참여 알림을 전달했습니다.', data: lessonParticipate };
  }

  @Post('cancel')
  @ApiOperation({ summary: '강의 취소 알림', description: '사용자의 강의 취소 알림을 전달합니다.' })
  @ApiBody({ type: LessonCancelDto, description: '강의 취소 알림 데이터' })
  @ApiResponse({ status: 200, description: '성공적으로 강의 취소 알림을 전달했습니다.', type: LessonCancelDto })
  @ApiResponse({
    status: 404,
    description: '해당 데이터를 가져올 수 없습니다',
  })
  sendLessonCancelNotification(
    @Body() lessonCancel: LessonCancel,
  ): { result: boolean; data: LessonCancel; message: string } {
    // 알림 메시지를 처리하는 로직 작성

    return { result: true, message: '강의 취소 알림을 전달했습니다.', data: lessonCancel };
  }

  @Post('End')
  @ApiOperation ({ summary: '수업 완료 알림'})
  @ApiBody({ type: LessonEndDto, description: '수업 완료 알림 데이터' })
  @ApiResponse({ status: 200, description: '성공적으로 수업 완료 알림을 전달했습니다.', type: LessonEndDto })
  @ApiResponse({
    status: 404,
    description: '해당 데이터를 가져올 수 없습니다',
  })
  sendLessonEndNotification(
    @Body() lessonEnd: LessonEnd,
  ): { result: boolean; data: LessonEnd; message: string } {
    // 알림 메시지를 처리하는 로직 작성

    return { result: true, message: '수업 완료 알림을 전달했습니다.', data: lessonEnd };
  }


  @Post('start')
  @ApiOperation ({ summary: '수업 시작 알림'})
  @ApiBody({ type: LessonStartDto, description: '수업 시자 알림 데이터' })
  @ApiResponse({ status: 200, description: '성공적으로 수업 시작 알림을 전달했습니다.', type: LessonStartDto })
  @ApiResponse({
    status: 404,
    description: '해당 데이터를 가져올 수 없습니다',
  })
  sendLessonStartNotification(
    @Body() lessonStart: LessonStart,
  ): { result: boolean; data: LessonStart; message: string } {
    // 알림 메시지를 처리하는 로직 작성

    return { result: true, message: '강의 취소 알림을 전달했습니다.', data: lessonStart };
  }

  @Post('success')
  @ApiOperation ({ summary: '수업 성사 알림'})
  @ApiBody({ type: LessonSuccessDto, description: '수업 성사 알림 데이터' })
  @ApiResponse({ status: 200, description: '성공적으로 수업 성사 알림을 전달했습니다.', type: LessonSuccessDto })
  @ApiResponse({
    status: 404,
    description: '해당 데이터를 가져올 수 없습니다',
  })
  sendLessonSuccessNotification(
    @Body() LessonSuccess: LessonSuccess,
  ): { result: boolean; data: LessonSuccess; message: string } {
    // 알림 메시지를 처리하는 로직 작성

    return { result: true, message: '수업 성사 알림을 전달했습니다.', data: LessonSuccess };
  }

  @Post('finish')
  @ApiOperation({ summary: '정원 마감 알림'})
  @ApiBody({ type: LessonFinishDto, description: '정원 마감 알림 데이터' })
  @ApiResponse({ status: 200, description: '성공적으로 정원 마감 알림을 전달했습니다.', type: LessonCancelDto })
  @ApiResponse({
    status: 404,
    description: '해당 데이터를 가져올 수 없습니다',
  })
  sendLessonFinishNotification(
    @Body() lessonFinish: LessonFinish,
  ): { result: boolean; data: LessonFinish; message: string } {
    // 알림 메시지를 처리하는 로직 작성

    return { result: true, message: '정원 마감알림을 전달했습니다.', data: lessonFinish };
  }
}

