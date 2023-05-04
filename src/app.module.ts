import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UserAuthModule } from './api/user-auth/user-auth.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import config from './app/config';
import { MongooseModule } from '@nestjs/mongoose';

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
    ,
    // api modules here
    UserAuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
