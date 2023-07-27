import { TalentList } from './talent-list.interface';
export declare class TalentListController {
    private lists;
    getList(): {
        result: boolean;
        data: TalentList[];
        message: string;
    };
}
