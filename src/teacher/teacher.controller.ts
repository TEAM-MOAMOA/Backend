import { Controller, Get } from '@nestjs/common';

@Controller('teachers')
export class TeacherController {
    private teachers = [
        { id: 1, name: 'sang hoon', age: 30, gender: 'Male', subject: 'Math' },
        { id: 2, name: 'ta ill', age: 20, gender: 'Male', subject: 'Art' },
        { id: 3, name: 'sal gu', age: 20, gender: 'Male', subject: 'Science' },
    ];

    @Get()
    getTeachers(): { result: boolean; data: any; message: string; } {

        if (this.teachers.length > 0) {
            return { result: true, message: '선생님 목록을 조회합니다', data: this.teachers };
        } else {
            return { result: false, message: '선생님 목록이 비어있습니다.', data:[] };
        }
    }
}
