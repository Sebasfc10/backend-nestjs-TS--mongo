import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StatModule } from './stat/stat.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [StatModule, MongooseModule.forRoot('mongodb://localhost/pokeback')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
