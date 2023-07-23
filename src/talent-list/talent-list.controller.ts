import { Controller, Get } from '@nestjs/common';
import { TalentList } from './talent-list.interface';

@Controller('talent-list')
export class TalentListController {
    private lists =[
        {id: 1, name: 'music'},
        {id: 2, name: 'art'},
        {id: 3, name: 'math'},
        {id: 4, name: 'sport'},
        //mort entires....
    ];

//홈화면 재능 카테고리 리스트 api
    @Get()
    getList(): { result: boolean; data: TalentList[]; message: string; } {
        return { result: true, message: '재능 카테고리 목록을 조회합니다.', data: this.lists };
      }
}


