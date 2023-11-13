import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateArticleDto {
  @ApiProperty({ required: true })
  @IsNotEmpty()
  title: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  description: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  banner: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsDate()
  createdAt: Date;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsDate()
  updatedAt: Date;
}
