import { postsData } from './posts.data';
import { Injectable } from '@nestjs/common';
import { Post } from './models/post.model';

@Injectable()
export class PostsService {
  public findAllByAuthor(authorId: number): Post[] {
    return postsData.filter((post) => post.authorId === authorId);
  }
}
