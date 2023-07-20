// board.controller.ts
import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { Board } from './board.interface';

@Controller('boards')
export class BoardController {
  private boards: Board[] = [];

  @Get()
  getBoards(): { result: boolean; data: Board[]; message: string } {
    return { result: true, message: '글 목록을 조회합니다.', data: this.boards };
  }

  @Post()
  addBoard(@Body() boardData: Board): { result: boolean; data: Board; message: string } {
    const newBoard: Board = {
      id: this.boards.length + 1,
      title: boardData.title,
      content: boardData.content,
      capacity: boardData.capacity,
      category: boardData.category,
      writer: boardData.writer,
      price: boardData.price,
     
    };
    this.boards.push(newBoard);

    return { result: true, message: '글을 생성했습니다.', data: newBoard };
  }

  @Delete(':id')
  deleteBoard(@Param('id') id: number): { result: boolean; message: string } {
    const index = this.boards.findIndex((board) => board.id === id);
    if (index !== -1) {
      this.boards.splice(index, 1);
      return { result: true, message: '글을 삭제했습니다.' };
    } else {
      return { result: false, message: '해당하는 글을 찾을 수 없습니다.' };
    }
  }

  @Put(':id')
  updateBoard(@Param('id') id: number, @Body() boardData: Board): { result: boolean; data?: Board; message: string } {
    const index = this.boards.findIndex((board) => board.id === id);
    if (index !== -1) {
      const updatedBoard: Board = {
        ...this.boards[index],
        title: boardData.title || this.boards[index].title,
        content: boardData.content || this.boards[index].content,
        writer: boardData.writer || this.boards[index].writer,
      };
      this.boards[index] = updatedBoard;
      return { result: true, message: '글을 수정했습니다.', data: updatedBoard };
    } else {
      return { result: false, message: '해당하는 글을 찾을 수 없습니다.' };
    }
  }
}

