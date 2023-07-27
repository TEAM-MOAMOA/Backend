export interface Teacher{
    id: number;
    name: string;
    age: number;
    gender: 'Male' | 'Female';
    subject: string;
    profileImage: string;
    reviewScore: number;
}