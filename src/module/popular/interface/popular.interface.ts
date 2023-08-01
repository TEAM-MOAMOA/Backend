export interface Teacher {
  lessonTeacher: string;
  age?: string;
  lessonComment?: string;
  lessonExplain?: string;
  lessonScore: number;
  lessonDistance: string;
  StarIcon: string;
  category?: string;
  tag?: string;
}

export interface LessonData extends Teacher {
  lessonTeacher: string;
  lessonScore: number;
  lessonDistance: string;
}
