import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { VaccineCertificateService } from './vaccine-certificate.service';
import { CreateVaccineCertificateDto } from './dto/create-vaccine-certificate.dto';
import { UpdateVaccineCertificateDto } from './dto/update-vaccine-certificate.dto';

@Controller('vaccine-certificate')
export class VaccineCertificateController {
  constructor(
    private readonly vaccineCertificateService: VaccineCertificateService,
  ) {}

  @Post('/create')
  create(@Body() payload: CreateVaccineCertificateDto) {
    return this.vaccineCertificateService.create(payload);
  }

  @Get('/certificates')
  findAll() {
    return this.vaccineCertificateService.findAll();
  }

  @Get('/singleCertificate:id')
  findOne(@Param('id') _id: string) {
    return this.vaccineCertificateService.findOne(_id);
  }

  @Patch('/updateCertificate:id')
  update(
    @Param('id') _id: string,
    @Body() payload: UpdateVaccineCertificateDto,
  ) {
    return this.vaccineCertificateService.update(_id, payload);
  }

  @Delete('/deleteCertificate:id')
  remove(@Param('id') _id: string) {
    return this.vaccineCertificateService.remove(_id);
  }
}
