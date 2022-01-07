import { HttpService } from '@nestjs/axios';
import { DummyData } from 'src/models/dummyData.model';
export declare class DummyDataService {
    private dummyDataModel;
    private http;
    constructor(dummyDataModel: typeof DummyData, http: HttpService);
    fetchAll(): Promise<DummyData[]>;
}
