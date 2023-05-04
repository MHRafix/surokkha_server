import { Injectable } from '@nestjs/common';
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
   * @param payload vaccine certificate documents
   * @returns
   */
  async create(payload: CreateVaccineCertificateDto) {
    try {
      await this.vaccineCertificateModel.create(payload);
      return true;
    } catch (err) {
      return false;
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
   * find by id
   * @param _id id
   * @returns
   */
  findOne(_id: string) {
    return this.vaccineCertificateModel.findById({
      _id,
    });
  }

  update(id: number, updateVaccineCertificateDto: UpdateVaccineCertificateDto) {
    return `This action updates a #${id} vaccineCertificate`;
  }

  /**
   * delete certificate
   * @param _id certificate id
   * @returns
   */
  async remove(_id: string) {
    try {
      await this.vaccineCertificateModel.deleteOne({
        _id,
      });
      return true;
    } catch (err) {
      return false;
    }
  }
}
