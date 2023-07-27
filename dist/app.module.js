"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const lesson_module_1 = require("./module/lesson/lesson.module");
const talent_list_module_1 = require("./module/talent-list/talent-list.module");
const teacher_module_1 = require("./module/teacher/teacher.module");
const user_module_1 = require("./module/user/user.module");
const post_module_1 = require("./module/post/post.module");
const config_1 = require("@nestjs/config");
const configuration_1 = require("./config/configuration");
let AppModule = exports.AppModule = class AppModule {
};
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            lesson_module_1.LessonModule,
            talent_list_module_1.TalentListModule,
            teacher_module_1.TeacherModule,
            user_module_1.UserModule,
            post_module_1.PostModule,
            config_1.ConfigModule.forRoot({
                load: [configuration_1.default],
            }),
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map