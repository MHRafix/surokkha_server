import {
  BadRequestException,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { CreateVaccineCertificateDto } from './dto/create-vaccine-certificate.dto';
import { UpdateVaccineCertificateDto } from './dto/update-vaccine-certificate.dto';
import { InjectModel } from '@nestjs/mongoose';
import {
  VaccineCertificate,
  VaccineCertificateDocument,
} from './entities/vaccine-certificate.entity';
import { Model } from 'mongoose';

@Injectable()
export class VaccineCertificateService {
  constructor(
    @InjectModel(VaccineCertificate.name)
    private vaccineCertificateModel: Model<VaccineCertificateDocument>,
  ) {}

  /**
   * create vaccine certificate
   * @param payload:CreateVaccineCertificateDto - vaccine certificate payload
   * @returns
   */
  async create(payload: CreateVaccineCertificateDto) {
    try {
      await this.vaccineCertificateModel.create(payload);
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
    return this.vaccineCertificateModel.find({});
  }

  /**
   * find single certificate by id
   * @param _id:string - certificate id
   * @returns
   */
  findOne(_id: string) {
    return this.vaccineCertificateModel.findById({
      _id,
    });
  }

  /**
   * update ceritifcate details
   * @param _id:string - certificate id
   * @param payload - certificate updated paylaod
   * @returns
   */
  async update(_id: string, payload: UpdateVaccineCertificateDto) {
    try {
      await this.vaccineCertificateModel.findByIdAndUpdate({ _id }, payload);
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
      await this.vaccineCertificateModel.deleteOne({
        _id,
      });
      return { isDeleted: true };
    } catch (err) {
      return new ForbiddenException();
    }
  }
}
