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

  @Post()
  create(@Body() createVaccineCertificateDto: CreateVaccineCertificateDto) {
    return this.vaccineCertificateService.create(createVaccineCertificateDto);
  }

  @Get()
  findAll() {
    return this.vaccineCertificateService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') _id: string) {
    return this.vaccineCertificateService.findOne(_id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateVaccineCertificateDto: UpdateVaccineCertificateDto,
  ) {
    return this.vaccineCertificateService.update(
      +id,
      updateVaccineCertificateDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') _id: string) {
    return this.vaccineCertificateService.remove(_id);
  }
}
