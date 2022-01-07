import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { DummyData } from 'src/models/dummyData.model';
import { DummyDataController } from './dummy-data.controller';
import { DummyDataService } from './dummy-data.service';

@Module({
  imports: [SequelizeModule.forFeature([DummyData]), HttpModule],
  controllers: [DummyDataController],
  providers: [DummyDataService],
  exports: [DummyDataService],
})
export class DummyDataModule {}
