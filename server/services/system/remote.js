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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logging_1 = __importDefault(require("../../utils/logging"));
const shell_1 = __importDefault(require("../../utils/shell"));
const getRemotePID = () => __awaiter(void 0, void 0, void 0, function* () {
    logging_1.default.log("[REMOTE] Get PID", logging_1.default.LoggingCategories.SYSTEM);
    const child = yield shell_1.default.executeAsync("pidof ssh");
    logging_1.default.log("[REMOTE] Complete Get PID", logging_1.default.LoggingCategories.SYSTEM);
    return child;
});
const enableRemoteSSH = () => {
    try {
        logging_1.default.log("[REMOTE] Begin enable", logging_1.default.LoggingCategories.SYSTEM);
        const child = shell_1.default.spawn("/opt/mp/mpssh", [], {
            detached: true,
            stdio: "ignore",
        }).unref();
        logging_1.default.log("[REMOTE] Complete enable", logging_1.default.LoggingCategories.SYSTEM);
        return true;
    }
    catch (error) {
        logging_1.default.log("[REMOTE] FAIL", logging_1.default.LoggingCategories.SYSTEM);
        return false;
    }
};
const disableRemoteSSH = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        logging_1.default.log("[REMOTE] Begin enable", logging_1.default.LoggingCategories.SYSTEM);
        const pid = yield getRemotePID();
        if (pid) {
            const kill = shell_1.default.executeAsync("kill " + pid);
        }
        logging_1.default.log("[REMOTE] Complete enable", logging_1.default.LoggingCategories.SYSTEM);
        return true;
    }
    catch (error) {
        logging_1.default.log("[REMOTE] FAIL", logging_1.default.LoggingCategories.SYSTEM);
        return false;
    }
});
const remote = {
    getRemotePID,
    enableRemoteSSH,
    disableRemoteSSH,
};
exports.default = remote;
//# sourceMappingURL=remote.js.map