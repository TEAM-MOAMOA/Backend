// talent-list.controller.ts
import { Controller, Get, Post, Body } from '@nestjs/common';
import { TalentList } from './talent-list.interface';

@Controller('talent-list')
export class TalentListController {
  private talentList: TalentList[] = [
    { id: 1, name: 'Music' },
    { id: 2, name: 'Art' },
    { id: 3, name: 'Science'},
    { id: 4, name: 'language'},
    // More talent entries...
  ];

  @Get()
  getTalentList(): { result: boolean; data: TalentList[]; message: string } {
    return { result: true, message: '재능 목록을 조회합니다.', data: this.talentList };
  }

  @Post()
  addTalent(@Body() talentData: TalentList): { result: boolean; data: TalentList; message: string } {
    const newTalent: TalentList = {
      id: this.talentList.length + 1,
      name: talentData.name,
    };
    this.talentList.push(newTalent);

    return { result: true, message: '재능을 추가했습니다.', data: newTalent };
  }
}
