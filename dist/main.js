"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
const config_1 = require("@nestjs/config");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const configService = app.get(config_1.ConfigService);
    const openApiBuilder = new swagger_1.DocumentBuilder()
        .setTitle('모아모아 API')
        .setDescription('모아모아 API 입니다.')
        .setVersion('1.0')
        .addTag('Lesson')
        .addTag('Teacher')
        .addTag('User')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, openApiBuilder);
    swagger_1.SwaggerModule.setup('api', app, document);
    await app.listen(configService.get('PORT'));
}
bootstrap();
//# sourceMappingURL=main.js.map