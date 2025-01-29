import { CommonService } from '@app/common';
import { PostsService } from '@app/common/services/posts/posts.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class LmsAdminService {
  constructor(
    private readonly commonService: CommonService,
    private readonly postsService: PostsService,
  ) {}
  async getHello(): Promise<string> {
    const posts = await this.postsService.getPosts();
    return (
      'Hello LMS Admin!' + ' ' + this.commonService.getHello() + ' ' + posts
    );
  }

  async concatToHello(message: string): Promise<string> {
    return 'Hello LMS Admin!' + ' ' + message;
  }
}
