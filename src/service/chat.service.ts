// chat.service.ts
import { Injectable } from '@nestjs/common';

@Injectable()
export class ChatService {
  // 채팅과 관련된 비즈니스 로직을 구현합니다.
  getChatData(): string {
    return '이곳은 채팅 화면 데이터입니다.';
  }
}
