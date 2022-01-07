import { BadRequestException, Controller, Get } from '@nestjs/common';
import { createSuccessResponse } from 'src/helpers/response.helper';
import { ResponseObject } from 'src/interfaces/response.interface';
import { DummyDataService } from './dummy-data.service';

@Controller('dummy-data')
export class DummyDataController {
  constructor(private readonly dummyDataService: DummyDataService) {}

  @Get()
  async fetchAll(): Promise<ResponseObject> {
    try {
      const data = await this.dummyDataService.fetchAll();
      if (data) {
        return createSuccessResponse('Records Fetched', {
          data,
        });
      }
    } catch (err) {
      throw new BadRequestException(err.message);
    }
  }
}
