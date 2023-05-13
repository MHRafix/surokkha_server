import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `<div><h1>Hello this is SUROKKHA SERVER ⛎⛎⛎!</h1> 
    <a href="/vaccine-certificate/create">Create Vaccine certificate</a> <br />
    <a href="/vaccine-certificate/certificates">Get all Vaccine certificate</a> <br />
    <a href="/vaccine-certificate/singleCertificate/[id]">Single Vaccine certificate</a> <br />
    <a href="/vaccine-certificate/updateCertificates">Update Vaccine certificate</a> <br />
    <a href="/vaccine-certificate/deleteCertificate">Delete Vaccine certificate</a> 
    </div>`;
  }
}
