import { Teacher } from './teacher.interface';
interface TeacherReview {
    id: number;
    userId: number;
    rating: number;
    comment: string;
}
export declare class TeacherController {
    private teachers;
    private teacherProfiles;
    private teacherReviewIdCounter;
    writeTeacherReview(teacherId: number, reviewData: TeacherReview): {
        result: boolean;
        data: TeacherReview;
        message: string;
    };
    getTeacherReviews(teacherId: number): {
        result: boolean;
        data: TeacherReview[];
        message: string;
    };
    getTeachersWithReviewScore4_5(): {
        result: boolean;
        message: string;
        data: Teacher[];
    };
    getPopularTeachers(): {
        result: boolean;
        message: string;
        data: Teacher[];
    };
    getNearbyTeachers(): {
        result: boolean;
        message: string;
        data: Teacher[];
    };
}
export {};
