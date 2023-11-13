import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type ArticleDocument = Article & Document;

@Schema({ timestamps: true })
export class Article {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  banner: string;

  @Prop({ required: false })
  createdAt: Date;

  @Prop({ required: false })
  updatedAt: Date;
}

export const ArticleSchema = SchemaFactory.createForClass(Article);
