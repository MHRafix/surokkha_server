import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ArticleService } from './article.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';

@Controller('article-api')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Post()
  create(@Body() payload: CreateArticleDto) {
    return this.articleService.create(payload);
  }

  @Get()
  findAll() {
    return this.articleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') _id: string) {
    return this.articleService.findOne(_id);
  }

  @Patch(':id')
  update(@Param('id') _id: string, @Body() payload: UpdateArticleDto) {
    return this.articleService.update(_id, payload);
  }

  @Delete(':id')
  remove(@Param('id') _id: string) {
    return this.articleService.remove(_id);
  }
}
