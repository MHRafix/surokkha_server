import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ValidateNested } from 'class-validator';
import { TakenDosesDto } from '../dto/create-vaccine-certificate.dto';

export type VaccineCertificateDocument = VaccineCertificate & Document;

@Schema({ timestamps: true })
export class BeneficiaryDetailsSchema {
  @Prop({ required: true })
  certificateNo: string;

  @Prop({ required: true })
  nidNo: string;

  @Prop({ required: true })
  passportNo: string;

  @Prop({ required: true })
  nationality: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  dateOfBirth: string;

  @Prop({ required: true })
  gender: string;
}

@Schema({ timestamps: true })
export class TakenDosesSchema {
  @Prop({ required: true })
  dateOfVaccination: string;

  @Prop({ required: true })
  nameOfVaccine: string;
}

@Schema({ timestamps: true })
export class VaccinationDetailsSchema {
  @Prop({ required: true })
  // @ValidateNested(TakenDosesSchema)
  vaccineDosesDetails: TakenDosesSchema[];

  @Prop({ required: true })
  vacinationCenterName: string;

  @Prop({ required: true })
  vaccinatedBy: string;
}

@Schema({ timestamps: true })
export class VaccineCertificate {
  @Prop({ required: true })
  beneficiaryDetails: BeneficiaryDetailsSchema;

  @Prop({ required: true })
  vaccinationDetails: VaccinationDetailsSchema;
}

export const VaccineCertificateSchema =
  SchemaFactory.createForClass(VaccineCertificate);
