"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logging_1 = __importDefault(require("../../utils/logging"));
const shell_1 = __importDefault(require("../../utils/shell"));
const enableRemoteSSH = () => {
    try {
        logging_1.default.log("[REMOTE] Begin enable", logging_1.default.LoggingCategories.SYSTEM);
        //const child = Shell.spawn("/opt/mp/mpssh", [], {
        const child = shell_1.default.spawn("ssh", ["-M 10001 -N -R 10000:localhost:22 -p 22000 mpserver"], {
            detached: true,
            shell: false,
            stdio: ["ignore"],
        });
        child.unref();
        logging_1.default.log("[REMOTE] Complete enable", logging_1.default.LoggingCategories.SYSTEM);
        return true;
    }
    catch (error) {
        logging_1.default.log("[REMOTE] FAIL", logging_1.default.LoggingCategories.SYSTEM);
        return false;
    }
};
const remote = {
    enableRemoteSSH,
};
exports.default = remote;
//# sourceMappingURL=remote.js.map