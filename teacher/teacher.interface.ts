export interface Teacher{
    id: number;
    name: string;
    age: number;
    gender: 'Male' | 'Female';
    subject: string;
    latitude: number; // 선생님의 위도
}

