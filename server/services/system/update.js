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
const registration_1 = require("../../models/registration");
const logging_1 = __importDefault(require("../../utils/logging"));
const shell_1 = __importDefault(require("../../utils/shell"));
const db_1 = __importDefault(require("../db"));
const getCurrentMotd = () => __awaiter(void 0, void 0, void 0, function* () {
    const registrationData = yield db_1.default.get("registration:data");
    const registration = new registration_1.Registration(registrationData);
    let rslt = yield shell_1.default.executeAsync(`cat ${config_1.default.paths.motd}`);
    rslt += "\n";
    rslt +=
        "COMMIT: " +
            (yield shell_1.default.executeAsync(`git rev-parse HEAD`)).substring(0, 7);
    rslt += "\n";
    rslt += "FIRMWARE: " + registration.firmware;
    rslt += "\n";
    rslt += "SERIAL: " + registration.serial_number;
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
        const sub = shell_1.default.spawn("/opt/mp/restart_node", [], {
            detached: true,
            stdio: "ignore",
        }).unref();
        // can't exit here, need to return a response first
        // process.exit();
        logging_1.default.log("* POST: restarting node", logging_1.default.LoggingCategories.SERVICES);
    }
    else {
        logging_1.default.log("* Up to Date", logging_1.default.LoggingCategories.SERVICES);
    }
    return updated;
});
const restartNode = (id) => {
    var sub;
    switch (id) {
        case 1:
            sub = shell_1.default.spawn("/opt/mp/restart_node", [], {
                detached: true,
                shell: true,
                stdio: ["ignore"],
            });
            sub.unref();
            return true;
            break;
        case 2:
            sub = shell_1.default.spawn("/bin/sh", ["opt/mp/restart_node"], {
                detached: true,
                shell: true,
                stdio: ["ignore"],
            });
            sub.unref();
            return true;
            break;
        case 3:
            sub = shell_1.default.spawn("/etc/init.d/S42node", ["restart"], {
                detached: true,
                shell: true,
                stdio: ["ignore"],
            });
            sub.unref();
            return true;
            break;
        case 4:
            sub = shell_1.default.spawn("/opt/mp/restart_node", [], {
                detached: true,
                shell: false,
                stdio: ["ignore"],
            });
            sub.unref();
            return true;
            break;
        case 5:
            sub = shell_1.default.spawn("/bin/sh", ["opt/mp/restart_node"], {
                detached: true,
                shell: false,
                stdio: ["ignore"],
            });
            sub.unref();
            return true;
            break;
        case 6:
            sub = shell_1.default.spawn("/etc/init.d/S42node", ["restart"], {
                detached: true,
                shell: false,
                stdio: ["ignore"],
            });
            sub.unref();
            return true;
            break;
    }
};
const update = {
    getCurrentMotd,
    getUpdateRequired,
    doUpdate,
    restartNode,
};
exports.default = update;
//# sourceMappingURL=update.js.map