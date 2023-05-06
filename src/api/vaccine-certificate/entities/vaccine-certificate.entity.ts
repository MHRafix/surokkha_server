import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type VaccineCertificateDocument = VaccineCertificate & Document;

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

export class TakenDosesSchema {
  @Prop({ required: true })
  dateOfVaccination: string;

  @Prop({ required: true })
  nameOfVaccine: string;
}

export class VaccinationDetailsSchema {
  @Prop({ required: true })
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
