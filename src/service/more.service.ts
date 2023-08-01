// more.service.ts
import { Injectable } from '@nestjs/common';

@Injectable()
export class MoreService {
  // 더보기와 관련된 비즈니스 로직을 구현합니다.
  getMoreData(): string {
    return '이곳은 더보기 화면 데이터입니다.';
  }
}
