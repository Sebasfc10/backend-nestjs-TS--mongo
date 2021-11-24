/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Stat } from './interface/stat.interface';
import { CreateStatDTO } from './dto/stat.dto';

@Injectable()
export class StatService {
  constructor(@InjectModel('Stat') private readonly statModel: Model<Stat>) {}

  async getStats(): Promise<Stat[]> {
      const stats = await this.statModel.find()
      return stats;
  }

  async getStat(statID: number): Promise<Stat>{
      const stat = await this.statModel.findById(statID);
      return stat;
  }

  async createStat(createStatDTO: CreateStatDTO): Promise<Stat>{
      const stat = new this.statModel(createStatDTO);
       return await stat.save();
  } 

  async deleteStat(statID: number): Promise<Stat>{
      const deletedStat = await this.statModel.findByIdAndDelete(statID);
      return deletedStat;
  }

  async updateStat(statID: number, createStatDTO: CreateStatDTO): Promise<Stat>{
      const updateStat =  await this.statModel.findByIdAndUpdate(statID, createStatDTO, { new: true });
      return updateStat;
  }

}
