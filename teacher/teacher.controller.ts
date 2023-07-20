import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { Teacher } from './teacher.interface';
import { Category } from './category.interface';


@Controller('teachers')
export class TeacherController {
    private teachers = [
        { id: 1, name: 'sang hoon', age: 30, gender: 'Male', subject: 'Music', latitude: 37.60943, longitude: 127.56789 },
        { id: 2, name: 'ta ill', age: 20, gender: 'Male', subject: 'Art', latitude: 39.12345, longitude: 125.24634 },
        { id: 3, name: 'sal gu', age: 20, gender: 'Male', subject: 'Science',latitude: 36.89796, longitude: 128.54325 },
    ];

    private categories: Category[] = [
        { id: 1, name: 'Music' },
        { id: 2, name: 'Art' },
        { id: 3, name: 'Science' },
      ];
      

    @Get()
    getTeacher(): { result: boolean; data: any; message: string; } {

        if (this.teachers.length > 0) {
            return { 
                result: true, 
                message: '선생님 목록을 조회합니다', 
                data: this.teachers };
        } else {
            return { 
                result: false, 
                message: '선생님 목록이 비어있습니다.', 
                data:[] };
        }
    }


    @Post()
    addTeacher(@Body() teacherData: Teacher): { result: boolean; data?: any; message?: string } {
      const newTeacher: Teacher = {
        id: this.teachers.length + 1,
        name: teacherData.name,
        age: teacherData.age,
        gender: teacherData.gender,
        subject: teacherData.subject,
      };
      this.teachers.push(newTeacher);
  
      return { result: true, data: newTeacher, message: '선생님을 추가했습니다.' };
    }

  @Get(':categoryName')
  getTeachersByCategory(@Param('categoryName') categoryName: string): { result: boolean; data: Teacher[]; message: string } {
    const category = this.categories.find((cat) => cat.name === categoryName);

    if (!category) {
      return { result: false, message: '해당하는 카테고리를 찾을 수 없습니다.', data: [] };
    }

    const teachersInCategory = this.teachers.filter((teacher) => teacher.subject === categoryName);
    return { result: true, message: `카테고리 '${categoryName}'에 속하는 선생님 목록을 조회합니다.`, data: teachersInCategory };
  }

  @Get('nearest')
  getNearestTeachers(@Query() queryParams: { latitude: number; longitude: number }): { result: boolean; data: Teacher[]; message: string } {
    const { latitude, longitude } = queryParams;

    if (!latitude || !longitude) {
      return { result: false, message: '현재 위치 정보가 전송되지 않았습니다.', data: [] };
    }
  }
}