import { Controller, Get } from '@nestjs/common';

@Controller('more')
export class MoreController {
  @Get()
  getMore(): string {
    // "더보기" 버튼을 클릭했을 때 수행할 동작을 구현합니다.
    return '이곳은 더보기 화면입니다.';
  }
}
