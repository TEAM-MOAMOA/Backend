import { Controller, Get, Post, Body } from '@nestjs/common';

@Controller()
export class MoaController {

    @Get('moa')
    findAll(): string {
        return 'This moa';
    }

    @Post('moapost')
    create(@Body() moaData: any): string{
        return 'This moa name: ${moaData.name}';
    }
}


