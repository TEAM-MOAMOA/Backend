
import { Injectable } from '@nestjs/common';

@Injectable()
export class HomeService {
  // 홈과 관련된 비즈니스 로직을 구현합니다.
  getHomeData(): string {
    return '이곳은 홈 화면 데이터입니다.';
  }
}
