import { User } from './user.interface';
export declare class UserController {
    private users;
    getUserProfile(userId: number): {
        result: boolean;
        data: User;
        message: string;
    };
    updateUserProfile(userId: number, updatedUserData: User): {
        result: boolean;
        data: User;
        message: string;
    };
    deleteUserProfile(userId: number): {
        result: boolean;
        message: string;
    };
    cancelLessonParticipation(userId: number, lessonId: number): {
        result: boolean;
        message: string;
    };
    participateInLesson(userId: number, lessonId: number): {
        result: boolean;
        message: string;
    };
    withdrawUser(userId: number): {
        result: boolean;
        message: string;
    };
}
