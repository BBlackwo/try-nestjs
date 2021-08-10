import { PostsService } from './posts.service';
import { Module } from '@nestjs/common';

@Module({
  providers: [PostsService],
  exports: [PostsService],
})
export class PostsModule {}
