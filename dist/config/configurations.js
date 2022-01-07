"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = () => {
    var _a;
    return ({
        database: {
            dialect: process.env.DATABASE_DIALECT,
            host: process.env.DATABASE_HOST,
            port: process.env.DATABASE_PORT,
            username: process.env.DATABASE_USER,
            password: process.env.DATABASE_PASSWORD,
            database: process.env.DATABASE_NAME,
        },
        jwt: {
            secret: process.env.JWT_SECRET,
            signOptions: {
                algorithm: process.env.JWT_ALGORITHM,
            },
        },
        multerDest: './uploads',
        enableLogs: (_a = process.env.ENABLE_LOGS) !== null && _a !== void 0 ? _a : false,
    });
};
//# sourceMappingURL=configurations.js.map