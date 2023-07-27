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
exports.LessonController = void 0;
const common_1 = require("@nestjs/common");
let LessonController = exports.LessonController = class LessonController {
    constructor() {
        this.lessons = [
            { id: 1, category: 'music', teacher: 'sang hun', hashtag: '국악, 3~5세, 음악교사' },
            { id: 2, category: 'art', teacher: 'sal gu', hashtag: '동양화, 3~5세, 미술교사' },
            { id: 3, category: 'science', teacher: 'ta ill', hashtag: '생명, 3~5세, 과학교사' },
        ];
        this.lessonDetails = [
            {
                id: 1,
                title: '피아노 기초 강의',
                description: '피아노 기본 연습 및 기초 음악 이론 강의',
                duration: 60,
                category: 'music',
                teacher: 'sang hun',
                hashtag: '국악, 3~5세, 음악교사',
            },
            {
                id: 2,
                title: '그림 그리기',
                description: '그림 그리는 기법과 색채 이론을 배우는 강의',
                duration: 90,
                category: 'art',
                teacher: 'sal gu',
                hashtag: '동양화, 3~5세, 미술교사',
            },
            {
                id: 3,
                title: '과학 실험',
                description: '재밌는 과학 실험을 통해 과학 원리를 이해하는 강의',
                duration: 120,
                category: 'science',
                teacher: 'ta ill',
                hashtag: '생명, 3~5세, 과학교사',
            },
        ];
    }
    getAllLessons() {
        return { result: true, message: '각 종 강의 리스트를 조회합니다.', data: this.lessons };
    }
    getLessonDetail(id) {
        const lessonDetail = this.lessonDetails.find((lesson) => lesson.id === id);
        if (!lessonDetail) {
            return { result: false, message: '해당 ID의 강의 상세 정보를 찾을 수 없습니다.', data: null };
        }
        return { result: true, message: '강의 상세 정보를 조회합니다.', data: lessonDetail };
    }
    searchLessons(category, teacher) {
        let filteredLessons = this.lessons;
        if (category) {
            filteredLessons = filteredLessons.filter((lesson) => lesson.category.toLowerCase().includes(category.toLowerCase()));
        }
        if (teacher) {
            filteredLessons = filteredLessons.filter((lesson) => lesson.teacher.toLowerCase().includes(teacher.toLowerCase()));
        }
        return { result: true, message: '강의를 검색 및 필터링합니다.', data: filteredLessons };
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], LessonController.prototype, "getAllLessons", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Object)
], LessonController.prototype, "getLessonDetail", null);
__decorate([
    (0, common_1.Get)('search'),
    __param(0, (0, common_1.Query)('category')),
    __param(1, (0, common_1.Query)('teacher')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Object)
], LessonController.prototype, "searchLessons", null);
exports.LessonController = LessonController = __decorate([
    (0, common_1.Controller)('lesson')
], LessonController);
//# sourceMappingURL=lesson.controller.js.map