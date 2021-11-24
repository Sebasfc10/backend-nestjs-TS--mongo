/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { StatController } from './stat.controller';
import { StatService } from './stat.service';
import { MongooseModule } from '@nestjs/mongoose';
import { StatSchema } from './schemas/stat.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: 'Stat', schema: StatSchema}
    ])
  ],
  controllers: [StatController],
  providers: [StatService]
})
export class StatModule {}
