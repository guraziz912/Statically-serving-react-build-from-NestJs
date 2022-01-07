declare const _default: () => {
    database: {
        dialect: string;
        host: string;
        port: string;
        username: string;
        password: string;
        database: string;
    };
    jwt: {
        secret: string;
        signOptions: {
            algorithm: string;
        };
    };
    multerDest: string;
    enableLogs: string | boolean;
};
export default _default;
