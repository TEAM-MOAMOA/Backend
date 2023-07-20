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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeacherController = void 0;
const common_1 = require("@nestjs/common");
let TeacherController = exports.TeacherController = class TeacherController {
    constructor() {
        this.teachers = [
            { id: 1, name: 'sang hoon', age: 30, gender: 'Male', subject: 'Math' },
            { id: 2, name: 'ta ill', age: 20, gender: 'Male', subject: 'Art' },
            { id: 3, name: 'sal gu', age: 20, gender: 'Male', subject: 'Science' },
        ];
    }
    getTeachers() {
        return {
            result: true,
            data: this.teachers
        };
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], TeacherController.prototype, "getTeachers", null);
exports.TeacherController = TeacherController = __decorate([
    (0, common_1.Controller)('teachers')
], TeacherController);
//# sourceMappingURL=teacher.controller.js.map