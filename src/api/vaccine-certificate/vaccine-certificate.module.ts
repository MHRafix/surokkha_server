import { Module } from '@nestjs/common';
import { VaccineCertificateService } from './vaccine-certificate.service';
import { VaccineCertificateController } from './vaccine-certificate.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  VaccineCertificate,
  VaccineCertificateSchema,
} from './entities/vaccine-certificate.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: VaccineCertificate.name, schema: VaccineCertificateSchema },
    ]),
  ],
  controllers: [VaccineCertificateController],
  providers: [VaccineCertificateService],
})
export class VaccineCertificateModule {}
