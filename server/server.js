"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const api_1 = require("./api");
const logging_1 = __importDefault(require("./utils/logging"));
const test_1 = require("./utils/test/test");
const path = require("path");
logging_1.default.enableLogging();
logging_1.default.log(path.resolve(__dirname, "./motd.txt"));
let api;
exports.api = api;
function startup() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const motd = fs.readFileSync(path.resolve(__dirname, "./motd.txt"), "utf8");
            const timerLabel = "[BOOT] System boot sequence took";
            console.log("\x1b[36m%s\x1b[0m", motd);
            console.time(timerLabel);
            exports.api = api = new api_1.API();
            console.timeEnd(timerLabel);
        }
        catch (error) {
            logging_1.default.log(error, logging_1.default.LoggingCategories.ERROR);
        }
    });
}
// Need to properly close the Redis connection.
// On exit does not allow async calls, so need
// to handle SIGTERM / SIGINT
process.on("SIGINT", () => {
    processExit("SIGINT");
    console.log(`About to SIGINT`);
});
process.on("SIGTERM", () => {
    processExit("SIGTERM");
    console.log(`About to SIGTERM`);
});
function processExit(msg) {
    // shell("echo `date` > /opt/redis/closed.log");
    // shell(`echo ${msg} >> /opt/redis/closed.log`);
    throw new Error("SIGINT / SIGTERM");
}
startup();
const a = test_1.toUpper("a");
const b = test_1.toLower("BBB");
//# sourceMappingURL=server.js.map