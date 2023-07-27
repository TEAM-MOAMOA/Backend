import { lesson } from './lesson.interface';
interface LessonDetail extends lesson {
    title: string;
    description: string;
    duration: number;
}
export declare class LessonController {
    private lessons;
    private lessonDetails;
    getAllLessons(): {
        result: boolean;
        data: lesson[];
        message: string;
    };
    getLessonDetail(id: number): {
        result: boolean;
        data: LessonDetail;
        message: string;
    };
    searchLessons(category: string, teacher: string): {
        result: boolean;
        data: lesson[];
        message: string;
    };
}
export {};
