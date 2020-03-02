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
const child_process = __importStar(require("child_process"));
const fs = __importStar(require("fs"));
const util = __importStar(require("util"));
const logging_1 = __importDefault(require("../logging"));
const readFilePromise = util.promisify(fs.readFile);
function executeAsync(cmd) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { stdout, stderr } = yield execAsync(cmd);
            return stdout.trim();
        }
        catch (e) {
            logging_1.default.log(e, logging_1.default.LoggingCategories.SYSTEM, true);
            throw new Error(e);
        }
    });
}
function executeAsyncWithError(cmd) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield execAsync(cmd);
            return result;
        }
        catch (e) {
            logging_1.default.log(e, logging_1.default.LoggingCategories.SYSTEM, true);
            throw new Error(e);
        }
    });
}
function execAsync(command) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            try {
                child_process.exec(command, (error, stdout, stderr) => {
                    if (error) {
                        reject(error);
                    }
                    resolve({ stdout, stderr });
                });
            }
            catch (error) {
                logging_1.default.log(error, logging_1.default.LoggingCategories.ERROR, true);
            }
        });
    });
}
function makeFileAsync(path, data) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                // if (!fs.existsSync(path)) {
                fs.writeFileSync(path, data);
                yield executeAsync("sync");
                // }
                resolve(true);
            }
            catch (err) {
                throw new Error(err);
            }
        }));
    });
}
function readFileAsync(path, options) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                if (fs.existsSync(path)) {
                    const file = (yield readFilePromise(path, options));
                    resolve(file);
                    return;
                }
                throw new Error("File does not exist.");
            }
            catch (err) {
                throw new Error(err);
            }
        }));
    });
}
const Shell = {
    executeAsync,
    executeAsyncWithError,
    makeFileAsync,
    readFileAsync
};
exports.default = Shell;
//# sourceMappingURL=index.js.map