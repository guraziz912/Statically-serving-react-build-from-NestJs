import { HttpService } from '@nestjs/axios';
import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { DummyData } from 'src/models/dummyData.model';

@Injectable()
export class DummyDataService {
  constructor(
    @InjectModel(DummyData)
    private dummyDataModel: typeof DummyData,
    private http: HttpService,
  ) {}
  async fetchAll(): Promise<DummyData[]> {
    try {
      const detergentTypes = await this.dummyDataModel.findAll({
        attributes: { exclude: ['created_at', 'updated_at'] },
        order: [['id', 'ASC']],
      });
      return detergentTypes;
    } catch (err) {
      throw new BadRequestException('Request failed');
    }
  }
}
