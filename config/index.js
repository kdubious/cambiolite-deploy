"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const rootPath = path_1.dirname(process.argv[1]);
const tmpPath = "/opt/tmp";
const paths = {
    root: rootPath,
    ui: "/opt/ww2/ui/",
    firstUseFile: `${tmpPath}/first_use.lock`,
    cleanStartupFile: `${tmpPath}/boot.lock`,
};
const db = {
    driver: "tcp",
    name: "",
    host: "localhost",
    port: 6379,
    user: "",
    pswd: "",
    socket: "/opt/redis/redis.sock",
    queuedb: 10,
};
const Config = {
    paths: paths,
    db: db,
};
exports.default = Config;
//# sourceMappingURL=index.js.map