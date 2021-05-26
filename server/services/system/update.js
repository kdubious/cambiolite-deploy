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
const config_1 = __importDefault(require("../../config"));
const logging_1 = __importDefault(require("../../utils/logging"));
const shell_1 = __importDefault(require("../../utils/shell"));
const getCurrentMotd = () => __awaiter(void 0, void 0, void 0, function* () {
    const rslt = yield shell_1.default.executeAsync(`cat ${config_1.default.paths.motd}`);
    return rslt;
});
// not needed if set up right:
// GIT_SSH_COMMAND='ssh -i /opt/ssh.key'
const getUpdateRequired = () => __awaiter(void 0, void 0, void 0, function* () {
    // const rslt = await Shell.executeAsyncWithError(
    //   "git -C /opt/www fetch --dry-run"
    // );
    // // GIT reports status on STDERR!!!
    // return rslt.stderr !== "";
    return true;
});
const doUpdate = () => __awaiter(void 0, void 0, void 0, function* () {
    let ts = Date.now();
    logging_1.default.log(`*** doUpdate ${ts}`, logging_1.default.LoggingCategories.SERVICES);
    const rslt = yield shell_1.default.executeAsync("git -C /opt/www pull");
    ts = Date.now();
    logging_1.default.log(`*** doUpdate ${ts}`, logging_1.default.LoggingCategories.SERVICES);
    const updated = rslt.indexOf("Already up to date.") === -1;
    if (updated) {
        logging_1.default.log("* restarting node", logging_1.default.LoggingCategories.SERVICES);
        ts = Date.now();
        logging_1.default.log(`*** doUpdate ${ts}`, logging_1.default.LoggingCategories.SERVICES);
        // const sub = Shell.spawn("/opt/mp/restart_node", null, {
        //   detached: true,
        //   shell: true,
        //   stdio: ["ignore"],
        // });
        const sub = shell_1.default.spawn("/opt/mp/restart_node", [], {
            detached: true,
            shell: true,
            stdio: ["ignore"],
        });
        sub.unref();
        // Shell.spawn("/etc/init.d/S42node", ["restart"], {
        //   detached: true,
        //   stdio: ["ignore"],
        // }).unref();
        // can't exit here, need to return a response first
        // process.exit();
        logging_1.default.log("* POST: restarting node", logging_1.default.LoggingCategories.SERVICES);
    }
    else {
        logging_1.default.log("* Up to Date", logging_1.default.LoggingCategories.SERVICES);
    }
    return updated;
});
const update = {
    getCurrentMotd,
    getUpdateRequired,
    doUpdate,
};
exports.default = update;
//# sourceMappingURL=update.js.map