// profile.controller.ts
import { Controller, Get, Post, Put, Body } from '@nestjs/common';
import { Profile } from './profile.interface';

@Controller('profiles')
export class ProfileController {
  private profile: Profile = {
    id: 1,
    name: 'John Doe',
    age: 30,
    email: 'johndoe@example.com',
  };

  @Get()
  getProfile(): { result: boolean; data: Profile; message: string } {
    return { result: true, message: '프로필 정보를 조회합니다.', data: this.profile };
  }

  @Put()
  updateProfile(@Body() profileData: Profile): { result: boolean; data: Profile; message: string } {
    this.profile.name = profileData.name || this.profile.name;
    this.profile.age = profileData.age || this.profile.age;
    this.profile.email = profileData.email || this.profile.email;
    return { result: true, message: '프로필 정보를 업데이트했습니다.', data: this.profile };
  }
}

