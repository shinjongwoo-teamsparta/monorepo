import { Injectable } from '@nestjs/common';

@Injectable()
export class PostsService {
  async getPosts(): Promise<string> {
    return 'GET SOME POSTS';
  }
}
