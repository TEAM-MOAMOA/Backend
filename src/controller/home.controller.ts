import { Controller, Get } from '@nestjs/common';

@Controller('home')
export class HomeController {
  @Get()
  getHome(): string {
    // "홈" 버튼을 클릭했을 때 수행할 동작을 구현합니다.
    return '이곳은 홈 화면입니다.';
  }
}
