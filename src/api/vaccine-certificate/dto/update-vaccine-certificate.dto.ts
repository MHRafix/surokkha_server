import { PartialType } from '@nestjs/mapped-types';
import { CreateVaccineCertificateDto } from './create-vaccine-certificate.dto';

export class UpdateVaccineCertificateDto extends PartialType(
  CreateVaccineCertificateDto,
) {}
