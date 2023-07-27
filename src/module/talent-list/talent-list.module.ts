import { Module } from '@nestjs/common';
import { TalentListController } from './talent-list.controller';

@Module({
  controllers: [TalentListController],
})
export class TalentListModule {}
