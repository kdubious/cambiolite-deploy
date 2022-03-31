"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const redis = __importStar(require("redis"));
const util = __importStar(require("util"));
const config_1 = __importDefault(require("../../config"));
const system_v_1 = __importDefault(require("../../models/system-v"));
const logging_1 = __importDefault(require("../../utils/logging"));
const name = "redis";
// let client: IRedisAsync;
const getClient = () => {
    const client = redis.createClient(config_1.default.db.port, config_1.default.db.host);
    // client = redis.createClient("//10.0.0.59:6379");
    client.on("error", (err) => {
        logging_1.default.log(err, logging_1.default.LoggingCategories.DB);
        logging_1.default.log("connection error", logging_1.default.LoggingCategories.DB);
    });
    client.on("connect", () => {
        logging_1.default.log("  connecting...", logging_1.default.LoggingCategories.DB);
    });
    client.on("ready", () => {
        logging_1.default.log("    ready", logging_1.default.LoggingCategories.DB);
    });
    client.getAsync = util.promisify(client.get).bind(client);
    client.setAsync = util.promisify(client.set).bind(client);
    client.zaddAsync = util.promisify(client.zadd).bind(client);
    client.zrangeAsync = util.promisify(client.zrange).bind(client);
    client.delAsync = util.promisify(client.del).bind(client);
    client.keysAsync = util.promisify(client.keys).bind(client);
    client.incrAsync = util.promisify(client.incr).bind(client);
    client.decrAsync = util.promisify(client.decr).bind(client);
    return client;
};
//     client = redis.createClient(Config.Instance.db.socket);
//     client.on("error", (err) => {
//         Logging.log("connection error", LoggingCategories.DB);
//     });
//     client.on("connect", (err) => {
//         Logging.log("  connecting...", LoggingCategories.DB);
//     });
//     client.on("ready", (err) => {
//         Logging.log("    ready", LoggingCategories.DB);
//     });
//     client.getAsync = util.promisify(client.get);
//     client.setAsync = util.promisify(client.set);
//     client.delAsync = util.promisify(client.del);
//     client.keysAsync = util.promisify(client.keys);
//     client.incrAsync = util.promisify(client.incr);
//     client.decrAsync = util.promisify(client.decr);
//     setUpMulti();
//     Logging.log("Client created", LoggingCategories.DB);
// }
const get = (key, redisClient) => __awaiter(void 0, void 0, void 0, function* () {
    let shouldQuit = false;
    if (!redisClient) {
        redisClient = getClient();
        shouldQuit = true;
    }
    try {
        const data = yield redisClient.getAsync(key);
        return parseData(data);
    }
    catch (error) {
        logging_1.default.log(error, logging_1.default.LoggingCategories.DB);
    }
    finally {
        if (shouldQuit) {
            redisClient.quit();
            redisClient = null;
        }
    }
});
const zrange = (key, startIndex, stopIndex, withscores = false, redisClient) => __awaiter(void 0, void 0, void 0, function* () {
    let shouldQuit = false;
    if (!redisClient) {
        redisClient = getClient();
        shouldQuit = true;
    }
    try {
        const data = yield redisClient.zrangeAsync(key, startIndex, stopIndex, withscores ? "withscores" : "");
        return parseData(data);
    }
    catch (error) {
        logging_1.default.log(error, logging_1.default.LoggingCategories.DB);
    }
    finally {
        if (shouldQuit) {
            redisClient.quit();
        }
    }
});
const set = (key, value, redisClient) => __awaiter(void 0, void 0, void 0, function* () {
    let shouldQuit = false;
    if (!redisClient) {
        redisClient = getClient();
        shouldQuit = true;
    }
    try {
        if (typeof value !== "string") {
            value = JSON.stringify(value);
        }
        const data = yield redisClient.setAsync(key, value);
        return data === "OK";
    }
    catch (error) {
        logging_1.default.log(error, logging_1.default.LoggingCategories.DB);
    }
    finally {
        if (shouldQuit) {
            redisClient.quit();
        }
    }
});
const hset = (key, field, value, redisClient) => __awaiter(void 0, void 0, void 0, function* () {
    let shouldQuit = false;
    if (!redisClient) {
        redisClient = getClient();
        shouldQuit = true;
    }
    try {
        if (typeof value !== "string") {
            value = JSON.stringify(value);
        }
        const data = yield redisClient.hsetAsync(key, field, value);
        return data;
    }
    catch (error) {
        logging_1.default.log(error, logging_1.default.LoggingCategories.DB);
    }
    finally {
        if (shouldQuit) {
            redisClient.quit();
        }
    }
});
const zadd = (setName, score, value, redisClient) => __awaiter(void 0, void 0, void 0, function* () {
    let shouldQuit = false;
    if (!redisClient) {
        redisClient = getClient();
        shouldQuit = true;
    }
    try {
        if (typeof value !== "string") {
            value = JSON.stringify(value);
        }
        const data = yield redisClient.zaddAsync(setName, score, value);
        return data;
    }
    catch (error) {
        logging_1.default.log(error, logging_1.default.LoggingCategories.DB);
    }
    finally {
        if (shouldQuit) {
            redisClient.quit();
        }
    }
});
const del = (key, redisClient) => __awaiter(void 0, void 0, void 0, function* () {
    let shouldQuit = false;
    if (!redisClient) {
        redisClient = getClient();
        shouldQuit = true;
    }
    try {
        const data = yield redisClient.delAsync(key);
        return data !== 0;
    }
    catch (error) {
        logging_1.default.log(error, logging_1.default.LoggingCategories.DB);
    }
    finally {
        if (shouldQuit) {
            redisClient.quit();
        }
    }
});
const getRaw = (key, redisClient) => __awaiter(void 0, void 0, void 0, function* () {
    let shouldQuit = false;
    if (!redisClient) {
        redisClient = getClient();
        shouldQuit = true;
    }
    try {
        const data = yield redisClient.getAsync(key);
        return data;
    }
    catch (error) {
        logging_1.default.log(error, logging_1.default.LoggingCategories.DB);
    }
    finally {
        if (shouldQuit) {
            redisClient.quit();
        }
    }
});
const getKeys = (pattern, redisClient) => __awaiter(void 0, void 0, void 0, function* () {
    let shouldQuit = false;
    if (!redisClient) {
        redisClient = getClient();
        shouldQuit = true;
    }
    try {
        const keys = yield redisClient.keysAsync(pattern);
        let results = yield Promise.all(keys.map((key) => __awaiter(void 0, void 0, void 0, function* () {
            const value = yield redisClient.getAsync(key);
            return { key, value: parseData(value) };
        })));
        results = results.sort((a, b) => a.key.localeCompare(b.key));
        return results;
    }
    catch (error) {
        logging_1.default.log(error, logging_1.default.LoggingCategories.DB);
    }
    finally {
        if (shouldQuit) {
            redisClient.quit();
        }
    }
});
const listKeys = (pattern, redisClient) => __awaiter(void 0, void 0, void 0, function* () {
    let shouldQuit = false;
    if (!redisClient) {
        redisClient = getClient();
        shouldQuit = true;
    }
    try {
        const data = yield redisClient.keysAsync(pattern);
        return data;
    }
    catch (error) {
        logging_1.default.log(error, logging_1.default.LoggingCategories.DB);
    }
    finally {
        if (shouldQuit) {
            redisClient.quit();
        }
    }
});
const incr = (key, redisClient) => __awaiter(void 0, void 0, void 0, function* () {
    let shouldQuit = false;
    if (!redisClient) {
        redisClient = getClient();
        shouldQuit = true;
    }
    try {
        const data = yield redisClient.incrAsync(key);
        return data;
    }
    catch (error) {
        logging_1.default.log(error, logging_1.default.LoggingCategories.DB);
    }
    finally {
        if (shouldQuit) {
            redisClient.quit();
        }
    }
});
const decr = (key, redisClient) => __awaiter(void 0, void 0, void 0, function* () {
    let shouldQuit = false;
    if (!redisClient) {
        redisClient = getClient();
        shouldQuit = true;
    }
    try {
        const data = yield redisClient.decrAsync(key);
        return data;
    }
    catch (error) {
        logging_1.default.log(error, logging_1.default.LoggingCategories.DB);
    }
    finally {
        if (shouldQuit) {
            redisClient.quit();
        }
    }
});
const getMulti = () => {
    const redisClient = redis.createClient(config_1.default.db.port, config_1.default.db.host); //Config.Instance.db.socket);
    return redisClient.multi();
};
const multiGet = (key, multi) => {
    // multi.getAsync = util.promisify(multi.get);
    return multi.get(key);
};
const multiSet = (key, value, multi) => {
    if (typeof value !== "string") {
        value = JSON.stringify(value);
    }
    // multi.setAsync = util.promisify(multi.set);
    return multi.set(key, value);
};
const multiExecAsync = (multi) => __awaiter(void 0, void 0, void 0, function* () {
    multi.execAsync = util.promisify(multi.exec);
    const ret = yield multi.execAsync();
    multi = null;
    return ret;
});
const multiDiscardAsync = (multi) => __awaiter(void 0, void 0, void 0, function* () {
    multi.discardAsync = util.promisify(multi.discard);
    const ret = yield multi.discardAsync();
    multi = null;
    return ret;
});
// public async getKeys(pattern: string) {
//     return await client
//         .keysAsync(pattern)
//         .then((keys) =>
//             Promise.all(keys.map((key) =>
//                 client
//                     .getAsync(key)
//                     .then((value) => ({ key, value: parseData(value) })),
//             )),
//         )
//         .then((results) => results.sort((a, b) => a.key.localeCompare(b.key)));
// }
const restart = () => system_v_1.default.Restart(name);
const start = () => system_v_1.default.Stop(name);
const stop = () => system_v_1.default.Stop(name);
// const setUpMulti = (redisClient: IRedisAsync) => {
//   Logging.log("new multi", LoggingCategories.DB);
//   return redisClient.multi();
//   // multi.execAsync = util.promisify(multi.exec);
//   // multi.discardAsync = util.promisify(multi.discard);
// };
const parseData = (data) => {
    try {
        logging_1.default.log("parseData", logging_1.default.LoggingCategories.DB);
        logging_1.default.log(data, logging_1.default.LoggingCategories.DB);
        return JSON.parse(data);
    }
    catch (_a) {
        return data;
    }
};
const service = () => {
    return {
        restart: () => restart,
        start: () => start,
        stop: () => stop,
    };
};
const DB = {
    del,
    get,
    getClient,
    getKeys,
    getMulti,
    hset,
    listKeys,
    multiDiscardAsync,
    multiExecAsync,
    multiGet,
    multiSet,
    set,
    zadd,
    zrange,
};
exports.default = DB;
//# sourceMappingURL=index.js.map