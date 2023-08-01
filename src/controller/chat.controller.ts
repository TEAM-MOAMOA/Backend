import { Controller, Get } from '@nestjs/common';

@Controller('chat')
export class ChatController {
  @Get()
  getChat(): string {
    // "채팅" 버튼을 클릭했을 때 수행할 동작을 구현합니다.
    return '이곳은 채팅 화면입니다.';
  }
}
