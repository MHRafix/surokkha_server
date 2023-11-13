import { ForbiddenException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { Article, ArticleDocument } from './entities/article.entity';

@Injectable()
export class ArticleService {
  constructor(
    @InjectModel(Article.name)
    private articleModel: Model<ArticleDocument>,
  ) {}

  /**
   * create vaccine certificate
   * @param payload:CreateVaccineCertificateDto - vaccine certificate payload
   * @returns
   */
  async create(payload: CreateArticleDto) {
    try {
      await this.articleModel.create(payload);
      return { isCreated: true };
    } catch (err) {
      return new ForbiddenException();
    }
  }

  /**
   * find all certificates
   * @returns
   */
  findAll() {
    return this.articleModel.find({});
  }

  /**
   * find single certificate by id
   * @param _id:string - certificate id
   * @returns
   */
  findOne(_id: string) {
    return this.articleModel.findById({
      _id,
    });
  }

  /**
   * update ceritifcate details
   * @param _id:string - certificate id
   * @param payload - certificate updated paylaod
   * @returns
   */
  async update(_id: string, payload: UpdateArticleDto) {
    try {
      await this.articleModel.findByIdAndUpdate({ _id }, payload);
      return { isUpdated: true };
    } catch (err) {
      return new ForbiddenException();
    }
  }

  /**
   * delete certificate service
   * @param _id:string - certificate id
   * @returns
   */
  async remove(_id: string) {
    try {
      await this.articleModel.deleteOne({
        _id,
      });
      return { isDeleted: true };
    } catch (err) {
      return new ForbiddenException();
    }
  }
}
