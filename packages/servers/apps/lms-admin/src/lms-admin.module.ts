import { Module } from '@nestjs/common';
import { LmsAdminController } from './lms-admin.controller';
import { LmsAdminService } from './lms-admin.service';
import { ChildrenModule } from 'libs/children/children.module';
import { CommonModule } from '@app/common';
import { UsersModule } from '@app/users';
import { PostsService } from '@app/common/services/posts/posts.service';

@Module({
  imports: [CommonModule, ChildrenModule, UsersModule],
  controllers: [LmsAdminController],
  providers: [LmsAdminService, PostsService],
})
export class LmsAdminModule {}
