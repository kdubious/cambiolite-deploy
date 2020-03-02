"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const redis_1 = __importDefault(require("redis"));
const util_1 = require("util");
const client = redis_1.default.createClient();
const getAsync = util_1.promisify(client.get).bind(client);
const setAsync = util_1.promisify(client.set).bind(client);
const redis_cli = {
    getAsync,
    setAsync,
};
exports.default = redis_cli;
//# sourceMappingURL=rediscli.js.map