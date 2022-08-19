import { Controller, Get } from '@nestjs/common';
import { TagService } from './tag.service';

@Controller('tags')
export class TagController {
  constructor(private readonly service: TagService) {}

  @Get()
  async findAllTags(): Promise<{ tags: string[] }> {
    const tags = await this.service.getAllTags();
    return {
      tags: tags.map((tag) => tag.name),
    };
  }
}
