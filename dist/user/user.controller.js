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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
let UserController = exports.UserController = class UserController {
    constructor() {
        this.users = [
            { id: 1, name: 'Sarah park', email: 'sahra@example.com', password: 'password123' },
            { id: 2, name: 'Jane lee', email: 'jane@example.com', password: 'password456' },
        ];
    }
    getUserProfile(userId) {
        const user = this.users.find((user) => user.id === userId);
        if (!user) {
            throw new common_1.NotFoundException('해당 ID의 사용자를 찾을 수 없습니다.');
        }
        return { result: true, message: '사용자 프로필을 조회합니다.', data: user };
    }
    updateUserProfile(userId, updatedUserData) {
        const userIndex = this.users.findIndex((user) => user.id === userId);
        if (userIndex === -1) {
            throw new common_1.NotFoundException('해당 ID의 사용자를 찾을 수 없습니다.');
        }
        this.users[userIndex] = {
            ...this.users[userIndex],
            name: updatedUserData.name,
            email: updatedUserData.email,
            password: updatedUserData.password,
        };
        return { result: true, message: '사용자 프로필이 업데이트되었습니다.', data: this.users[userIndex] };
    }
    deleteUserProfile(userId) {
        const userIndex = this.users.findIndex((user) => user.id === userId);
        if (userIndex === -1) {
            throw new common_1.NotFoundException('해당 ID의 사용자를 찾을 수 없습니다.');
        }
        this.users.splice(userIndex, 1);
        return { result: true, message: '사용자 프로필이 삭제되었습니다.' };
    }
    cancelLessonParticipation(userId, lessonId) {
        return { result: true, message: '강의 참여가 취소되었습니다.' };
    }
    participateInLesson(userId, lessonId) {
        return { result: true, message: '강의에 참여하였습니다.' };
    }
    withdrawUser(userId) {
        return { result: true, message: '회원 탈퇴가 완료되었습니다.' };
    }
};
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Object)
], UserController.prototype, "getUserProfile", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Object)
], UserController.prototype, "updateUserProfile", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Object)
], UserController.prototype, "deleteUserProfile", null);
__decorate([
    (0, common_1.Post)(':id/lessons/:lessonId/cancel'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Param)('lessonId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Object)
], UserController.prototype, "cancelLessonParticipation", null);
__decorate([
    (0, common_1.Post)(':id/lessons/:lessonId/participate'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Param)('lessonId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Object)
], UserController.prototype, "participateInLesson", null);
__decorate([
    (0, common_1.Delete)(':id/withdraw'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Object)
], UserController.prototype, "withdrawUser", null);
exports.UserController = UserController = __decorate([
    (0, common_1.Controller)('users')
], UserController);
//# sourceMappingURL=user.controller.js.map