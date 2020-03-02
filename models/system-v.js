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
const logging_1 = __importDefault(require("../utils/logging"));
const shell_1 = __importDefault(require("../utils/shell"));
const Start = (name) => __awaiter(void 0, void 0, void 0, function* () {
    return yield manageService(name, "start");
});
const Stop = (name) => __awaiter(void 0, void 0, void 0, function* () {
    return yield manageService(name, "stop");
});
const Restart = (name) => __awaiter(void 0, void 0, void 0, function* () {
    return yield manageService(name, "restart");
});
const Disable = (name) => __awaiter(void 0, void 0, void 0, function* () {
    const cmd = `rm /etc/init.d/${name}`;
    try {
        const ret = yield shell_1.default.executeAsyncWithError(cmd);
        if (ret.stderr) {
            logging_1.default.log(`"${name}" (${cmd}) failed with: ${ret.stderr}`, logging_1.default.LoggingCategories.ERROR, true);
            return false;
        }
        else {
            logging_1.default.log(`"${name}" (${cmd}) was removed.`, logging_1.default.LoggingCategories.SERVICES);
            return true;
        }
    }
    catch (err) {
        throw new Error(`[SERVICES] Failed to remove "${name}" (${cmd})`);
    }
});
const Enable = (name, config) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const path = `/etc/init.d/${name}`;
        const ret = yield shell_1.default.makeFileAsync(path, config);
        if (ret) {
            const child = child_process.spawnSync("chmod", ["+x", path]);
            logging_1.default.log(child, logging_1.default.LoggingCategories.SERVICES);
            logging_1.default.log(child.stderr.toString(), logging_1.default.LoggingCategories.SERVICES);
        }
        else {
            logging_1.default.log(`"${name}" was not enabled by makeFileAsync.`, logging_1.default.LoggingCategories.SERVICES);
        }
        return ret;
    }
    catch (err) {
        throw new Error(`[SERVICES] Failed to enable "${name}" (${config})`);
    }
});
const manageService = (name, action, options) => __awaiter(void 0, void 0, void 0, function* () {
    const cmd = `/etc/init.d/${name}`;
    try {
        const ret = child_process.spawnSync(cmd, [action], options);
        if (ret.status === 0) {
            // Success
            logging_1.default.log(`"${name}" (${cmd}) ${(action === "stop") ? "stopp" : action}ed.`, logging_1.default.LoggingCategories.SERVICES);
            return true;
        }
        else {
            logging_1.default.log(`"${name}" (${cmd} ${action}) failed with: ${ret.stderr}`, logging_1.default.LoggingCategories.ERROR, true);
            logging_1.default.log(ret);
            return false;
        }
    }
    catch (err) {
        throw new Error(`[SERVICES] Failed to ${action} "${name}" (${cmd})`);
    }
});
const SystemV = {
    Start,
    Stop,
    Restart,
    Enable,
    Disable,
};
exports.default = SystemV;
//# sourceMappingURL=system-v.js.map