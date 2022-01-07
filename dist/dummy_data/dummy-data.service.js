"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DummyDataService = void 0;
const axios_1 = require("@nestjs/axios");
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const dummyData_model_1 = require("../models/dummyData.model");
let DummyDataService = class DummyDataService {
    constructor(dummyDataModel, http) {
        this.dummyDataModel = dummyDataModel;
        this.http = http;
    }
    async fetchAll() {
        try {
            const detergentTypes = await this.dummyDataModel.findAll({
                attributes: { exclude: ['created_at', 'updated_at'] },
                order: [['id', 'ASC']],
            });
            return detergentTypes;
        }
        catch (err) {
            throw new common_1.BadRequestException('Request failed');
        }
    }
};
DummyDataService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(dummyData_model_1.DummyData)),
    __metadata("design:paramtypes", [Object, axios_1.HttpService])
], DummyDataService);
exports.DummyDataService = DummyDataService;
//# sourceMappingURL=dummy-data.service.js.map