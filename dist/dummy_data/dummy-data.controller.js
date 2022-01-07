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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DummyDataController = void 0;
const common_1 = require("@nestjs/common");
const response_helper_1 = require("../helpers/response.helper");
const dummy_data_service_1 = require("./dummy-data.service");
let DummyDataController = class DummyDataController {
    constructor(dummyDataService) {
        this.dummyDataService = dummyDataService;
    }
    async fetchAll() {
        try {
            const data = await this.dummyDataService.fetchAll();
            if (data) {
                return (0, response_helper_1.createSuccessResponse)('Records Fetched', {
                    data,
                });
            }
        }
        catch (err) {
            throw new common_1.BadRequestException(err.message);
        }
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DummyDataController.prototype, "fetchAll", null);
DummyDataController = __decorate([
    (0, common_1.Controller)('dummy-data'),
    __metadata("design:paramtypes", [dummy_data_service_1.DummyDataService])
], DummyDataController);
exports.DummyDataController = DummyDataController;
//# sourceMappingURL=dummy-data.controller.js.map