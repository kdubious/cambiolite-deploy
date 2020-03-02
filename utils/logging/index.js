"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable: no-console
let isEnabled = false;
const enableLogging = () => {
    isEnabled = true;
};
const disableLogging = () => {
    isEnabled = false;
};
const log = (message, category, isError) => {
    if (!isEnabled) {
        return;
    }
    if (!isError) {
        let msg = category ? `[${LoggingCategories[category]}] ` : "";
        if (typeof message === "string") {
            msg += message ? message : "";
            console.log(msg);
        }
        else {
            if (category) {
                console.log(`[${LoggingCategories[category]}]`);
            }
            console.log(message);
        }
    }
    else {
        console.error(message);
    }
};
var LoggingCategories;
(function (LoggingCategories) {
    LoggingCategories[LoggingCategories["APP"] = 0] = "APP";
    LoggingCategories[LoggingCategories["ART"] = 1] = "ART";
    LoggingCategories[LoggingCategories["BOOT"] = 2] = "BOOT";
    LoggingCategories[LoggingCategories["DB"] = 3] = "DB";
    LoggingCategories[LoggingCategories["ERROR"] = 4] = "ERROR";
    LoggingCategories[LoggingCategories["HTTP"] = 5] = "HTTP";
    LoggingCategories[LoggingCategories["MPD"] = 6] = "MPD";
    LoggingCategories[LoggingCategories["PLAYER"] = 7] = "PLAYER";
    LoggingCategories[LoggingCategories["RAAT"] = 8] = "RAAT";
    LoggingCategories[LoggingCategories["SERVICES"] = 9] = "SERVICES";
    LoggingCategories[LoggingCategories["SHAIRPORT"] = 10] = "SHAIRPORT";
    LoggingCategories[LoggingCategories["SOCKET"] = 11] = "SOCKET";
    LoggingCategories[LoggingCategories["STORAGE"] = 12] = "STORAGE";
    LoggingCategories[LoggingCategories["SYSTEM"] = 13] = "SYSTEM";
    LoggingCategories[LoggingCategories["TODO"] = 14] = "TODO";
    LoggingCategories[LoggingCategories["UPMPDCLI"] = 15] = "UPMPDCLI";
    LoggingCategories[LoggingCategories["ZZZZZZZZZZZ"] = 16] = "ZZZZZZZZZZZ";
})(LoggingCategories || (LoggingCategories = {}));
const Logging = {
    enableLogging,
    disableLogging,
    log,
    LoggingCategories,
};
exports.default = Logging;
//# sourceMappingURL=index.js.map