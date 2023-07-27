"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeacherController = void 0;
const common_1 = require("@nestjs/common");
let TeacherController = exports.TeacherController = class TeacherController {
    constructor() {
        this.teachers = [
            { id: 1, name: 'sang hoon', age: 30, gender: 'Male', subject: 'Music', profileImage: 'profile1.jpg', reviewScore: 4.4 },
            { id: 2, name: 'ta ill', age: 20, gender: 'Male', subject: 'Art', profileImage: 'profile2.jpg', reviewScore: 4.5 },
            { id: 3, name: 'sal gu', age: 20, gender: 'Male', subject: 'Science', profileImage: 'profile3.jpg', reviewScore: 4.3 },
        ];
        this.teacherProfiles = [];
        this.teacherReviewIdCounter = 1;
    }
    writeTeacherReview(teacherId, reviewData) {
        const teacherProfile = this.teacherProfiles.find((profile) => profile.id === teacherId);
        if (!teacherProfile) {
            throw new common_1.NotFoundException('해당 ID의 선생님 프로필을 찾을 수 없습니다.');
        }
        const newReview = {
            id: this.teacherReviewIdCounter++,
            userId: reviewData.userId,
            rating: reviewData.rating,
            comment: reviewData.comment,
        };
        teacherProfile.reviews.push(newReview);
        return { result: true, message: '선생님 프로필에 리뷰가 작성되었습니다.', data: newReview };
    }
    getTeacherReviews(teacherId) {
        const teacherProfile = this.teacherProfiles.find((profile) => profile.id === teacherId);
        if (!teacherProfile) {
            throw new common_1.NotFoundException('해당 ID의 선생님 프로필을 찾을 수 없습니다.');
        }
        return { result: true, message: '선생님의 리뷰를 조회합니다.', data: teacherProfile.reviews };
    }
    getTeachersWithReviewScore4_5() {
        const filteredTeachers = this.teachers.filter((teacher) => teacher.reviewScore === 4.5);
        return { result: true, message: 'Review가 4.5인 선생님 목록을 조회합니다.', data: filteredTeachers };
    }
    getPopularTeachers() {
        const sortedTeachers = this.teachers.sort((a, b) => b.reviewScore - a.reviewScore);
        return { result: true, message: '인기 급상승한 선생님 목록을 조회합니다.', data: sortedTeachers };
    }
    getNearbyTeachers() {
        return { result: true, message: '거리가 가까운 선생님 목록을 조회합니다.', data: this.teachers };
    }
};
__decorate([
    (0, common_1.Post)(':id/reviews'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Object)
], TeacherController.prototype, "writeTeacherReview", null);
__decorate([
    (0, common_1.Get)(':id/reviews'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Object)
], TeacherController.prototype, "getTeacherReviews", null);
__decorate([
    (0, common_1.Get)('review-4.5'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], TeacherController.prototype, "getTeachersWithReviewScore4_5", null);
__decorate([
    (0, common_1.Get)('popular'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], TeacherController.prototype, "getPopularTeachers", null);
__decorate([
    (0, common_1.Get)('nearby'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], TeacherController.prototype, "getNearbyTeachers", null);
exports.TeacherController = TeacherController = __decorate([
    (0, common_1.Controller)('teacher')
], TeacherController);
//# sourceMappingURL=teacher.controller.js.map