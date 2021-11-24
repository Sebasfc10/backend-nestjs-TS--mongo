/* eslint-disable prettier/prettier */
import {
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Res,
  HttpStatus,
  Body,
  Param,
  NotFoundException,
  Query,
} from '@nestjs/common';
import { stat } from 'fs';
import { CreateStatDTO } from './dto/stat.dto';
import { StatService } from './stat.service';

@Controller('stat')
export class StatController {
  constructor(private statService: StatService) {}

  @Post('/create')
  async reatePost(@Res() res, @Body() createStatDTO: CreateStatDTO) {
    //console.log(createStatDTO);
    const stat = await this.statService.createStat(createStatDTO);
    return res.status(HttpStatus.OK).json({
      message: 'recibido',
      stat
    });
  }

  @Get('/')
  async getStats(@Res() res){
     const stats = await this.statService.getStats();
     res.status(HttpStatus.OK).json({
       stats
     })
  }

  @Get('/:statID')
  async getStat(@Res() res, @Param('statID') statID){
    const stat = await this.statService.getStat(statID);
    if(!stat) throw new NotFoundException('Este pokemon no tiene esta estadistica');
    return res.status(HttpStatus.OK).json(stat)
  }

  @Delete('/delete')
  async deleteStat(@Res() res, @Query('statID') statID){
    const statDelete = await this.statService.deleteStat(statID);
    if(!statDelete) throw new NotFoundException('Este pokemon no tiene esta estadistica');
    return res.status(HttpStatus.OK).json({
      message: 'Tu pokemon esta limpio de IVS malos :D',
      statDelete
    })
  }

  @Put('/update')
  async updateStat(@Res() res, @Body() CreateStatDTO: CreateStatDTO, @Query('statID') statID){
    const updateStat = await this.statService.updateStat(statID, CreateStatDTO);
    if(!updateStat) throw new NotFoundException('Este pokemon no tiene esta estadistica');
    return res.status(HttpStatus.OK).json({
      message: 'Tu pokemon actualizo sus IVS',
      updateStat
    })
  }
}
