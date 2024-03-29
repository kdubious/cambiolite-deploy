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
exports.api = void 0;
const fs = __importStar(require("fs"));
const api_1 = require("./api");
const registration_1 = require("./models/registration");
const db_1 = __importDefault(require("./services/db"));
const logging_1 = __importDefault(require("./utils/logging"));
const shell_1 = __importDefault(require("./utils/shell"));
const test_1 = require("./utils/test/test");
const path = require("path");
const firmwareVersion = "3.1.007";
const moveRaat = "mv /opt/roon/raat_app /opt/roon/raat_app-OLD";
const undoRaat = "mv /opt/roon/raat_app-OLD /opt/roon/raat_app";
const getRaat = "wget -O /opt/roon/raat_app http://cdn.musicapristina.com/raat_app";
const chmodRaat = "chmod +x /opt/roon/raat_app";
const cleanRaat = "rm /opt/roon/raat_app-OLD";
const moveCodec = "mv /lib/modules/5.2.18/extra/snd-soc-mp-codec.ko /lib/modules/5.2.18/extra/snd-soc-mp-codec.ko-OLD";
const undoCodec = "mv /lib/modules/5.2.18/extra/snd-soc-mp-codec.ko-OLD /lib/modules/5.2.18/extra/snd-soc-mp-codec.ko";
const getCodec = "wget -O /lib/modules/5.2.18/extra/snd-soc-mp-codec.ko http://cdn.musicapristina.com/snd-soc-mp-codec.ko";
const cleanCodec = "rm /lib/modules/5.2.18/extra/snd-soc-mp-codec.ko-OLD";
const fileToCheck = "/opt/update2.txt";
const complete = "touch " + fileToCheck;
let api;
exports.api = api;
logging_1.default.enableLogging();
logging_1.default.log(path.resolve(__dirname, "./motd.txt"));
function startup() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const motd = fs.readFileSync(path.resolve(__dirname, "./motd.txt"), "utf8");
            const timerLabel = "[BOOT] System boot sequence took";
            console.log("\x1b[36m%s\x1b[0m", motd);
            console.time(timerLabel);
            fs.access(fileToCheck, fs.constants.F_OK, (err) => __awaiter(this, void 0, void 0, function* () {
                if (err) {
                    console.log("move Raat");
                    yield shell_1.default.executeAsync(moveRaat);
                    try {
                        console.log("get Raat");
                        yield shell_1.default.executeAsync(getRaat);
                    }
                    catch (_a) {
                        console.log("undo Raat");
                        yield shell_1.default.executeAsync(undoRaat);
                    }
                    console.log("chmodRaat");
                    yield shell_1.default.executeAsync(chmodRaat);
                    console.log("move Codec");
                    yield shell_1.default.executeAsync(moveCodec);
                    try {
                        console.log("get Codec");
                        yield shell_1.default.executeAsync(getCodec);
                    }
                    catch (_b) {
                        console.log("undo Codec");
                        yield shell_1.default.executeAsync(undoCodec);
                    }
                    yield shell_1.default.executeAsync(complete);
                }
                const registrationData = yield db_1.default.get("registration:data");
                const registration = new registration_1.Registration(registrationData);
                registration.firmware = firmwareVersion;
                yield db_1.default.set("registration:data", registration);
                exports.api = api = new api_1.API();
                console.timeEnd(timerLabel);
                return;
            }));
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
const a = (0, test_1.toUpper)("a");
const b = (0, test_1.toLower)("BBB");
//# sourceMappingURL=server.js.map