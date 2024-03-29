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
const child_process = __importStar(require("child_process"));
const fs = __importStar(require("fs"));
const util = __importStar(require("util"));
const logging_1 = __importDefault(require("../logging"));
const readFilePromise = util.promisify(fs.readFile);
const execPromise = util.promisify(child_process.exec);
function executeAsync(cmd) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { stdout, stderr } = yield execAsync(cmd);
            return stdout;
        }
        catch (e) {
            logging_1.default.log(e, logging_1.default.LoggingCategories.SYSTEM, true);
            return Promise.reject(e);
            //throw new Error(e);
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
            return Promise.reject(e);
            // throw new Error(e);
        }
    });
}
function execAsync(command) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { stdout, stderr } = yield execPromise(command);
            return { stdout, stderr };
        }
        catch (e) {
            logging_1.default.log(e, logging_1.default.LoggingCategories.SYSTEM, true);
            return Promise.reject(e);
            //throw new Error(e);
        }
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
                    const file = yield readFilePromise(path, options);
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
function spawn(command, args, options) {
    if (!options) {
        options = {
            shell: true,
        };
    }
    logging_1.default.log(spawn, logging_1.default.LoggingCategories.SYSTEM, true);
    logging_1.default.log(command, logging_1.default.LoggingCategories.SYSTEM, true);
    logging_1.default.log(args, logging_1.default.LoggingCategories.SYSTEM, true);
    logging_1.default.log(options, logging_1.default.LoggingCategories.SYSTEM, true);
    return child_process.spawn(command, args, options);
}
const Shell = {
    executeAsync,
    executeAsyncWithError,
    makeFileAsync,
    readFileAsync,
    spawn,
};
exports.default = Shell;
//# sourceMappingURL=index.js.map