import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import config from './app/config';
import { MongooseModule } from '@nestjs/mongoose';
import { VaccineCertificateModule } from './api/vaccine-certificate/vaccine-certificate.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: config,
      envFilePath: [
        '.env',
        '.env.local',
        '.env.development',
        '.env.production',
      ],
    }),
    MongooseModule.forRoot(process.env.MONGODB_CONNECTION_URI),
    // api modules here
    VaccineCertificateModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
