import {
  Controller,
  Post,
  Put,
  Delete,
  Param,
  Body,
  NotFoundException,
} from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

interface PostData {
  id: string; // UUID로 변경
  category: string;
  title: string;
  content: string;
}

@Controller('posts')
export class PostController {
  private posts: PostData[] = [];

  @Post()
  createPost(@Body() postData: PostData): {
    result: boolean;
    data: PostData;
    message: string;
  } {
    const newPost: PostData = {
      id: uuidv4(), // UUID로 생성
      category: postData.category,
      title: postData.title,
      content: postData.content,
    };

    this.posts.push(newPost);

    return {
      result: true,
      message: '새로운 글이 작성되었습니다.',
      data: newPost,
    };
  }

  @Put(':id')
  updatePost(
    @Param('id') id: string,
    @Body() updatedData: PostData,
  ): { result: boolean; data: PostData; message: string } {
    const post = this.posts.find((post) => post.id === id);

    if (!post) {
      throw new NotFoundException('해당 ID의 글을 찾을 수 없습니다.');
    }

    post.category = updatedData.category;
    post.title = updatedData.title;
    post.content = updatedData.content;

    return { result: true, message: '글이 수정되었습니다.', data: post };
  }

  @Delete(':id')
  deletePost(@Param('id') id: string): { result: boolean; message: string } {
    const postIndex = this.posts.findIndex((post) => post.id === id);

    if (postIndex === -1) {
      throw new NotFoundException('해당 ID의 글이 삭제되었습니다.');
    }

    this.posts.splice(postIndex, 1);

    return { result: true, message: '글이 삭제되었습니다.' };
  }
}
