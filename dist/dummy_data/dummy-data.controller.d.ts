import { ResponseObject } from 'src/interfaces/response.interface';
import { DummyDataService } from './dummy-data.service';
export declare class DummyDataController {
    private readonly dummyDataService;
    constructor(dummyDataService: DummyDataService);
    fetchAll(): Promise<ResponseObject>;
}
