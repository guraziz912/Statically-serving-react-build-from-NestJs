"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSuccessResponse = void 0;
const createSuccessResponse = (message = '', data, success = true) => {
    return Object.assign({ statusCode: 200, message,
        success }, (data && { data }));
};
exports.createSuccessResponse = createSuccessResponse;
//# sourceMappingURL=response.helper.js.map