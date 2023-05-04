import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsArray, IsNotEmpty, ValidateNested } from 'class-validator';

export class BeneficiaryDetailsDto {
  @ApiProperty({ required: true })
  @IsNotEmpty()
  certificateNo: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  nidNo: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  passportNo: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  nationality: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  name: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  dateOfBirth: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  gender: string;
}

export class TakenDosesDto {
  @ApiProperty({ required: true })
  @IsNotEmpty()
  dateOfVaccination: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  nameOfVaccine: string;
}

export class VaccinationDetailsDto {
  @ApiProperty({ type: [TakenDosesDto], required: true })
  @ValidateNested({ each: true })
  @Type(() => TakenDosesDto)
  @IsArray()
  vaccineDosesDetails: TakenDosesDto[];

  @ApiProperty({ required: true })
  @IsNotEmpty()
  vacinationCenterName: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  vaccinatedBy: string;
}

export class CreateVaccineCertificateDto {
  @ApiProperty({ required: true })
  @IsNotEmpty()
  beneficiaryDetails: BeneficiaryDetailsDto;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  vaccinationDetails: VaccinationDetailsDto;
}
