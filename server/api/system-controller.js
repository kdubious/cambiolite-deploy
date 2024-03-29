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
const express_1 = __importDefault(require("express"));
const registration_1 = require("../models/registration");
const notifications_1 = __importDefault(require("../services/notifications"));
const config_1 = __importDefault(require("../services/system/config"));
const debug_1 = __importDefault(require("../services/system/debug"));
const registration_2 = __importDefault(require("../services/system/registration"));
const remote_1 = __importDefault(require("../services/system/remote"));
const update_1 = __importDefault(require("../services/system/update"));
const errors_1 = require("../utils/errors");
const logging_1 = __importDefault(require("../utils/logging"));
var systemRouter = express_1.default.Router();
// middleware that is specific to this router
systemRouter.use(function timeLog(req, res, next) {
    console.log("Time: ", Date.now());
    next();
});
systemRouter.get("/config", function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        (0, errors_1.handleAsyncRouteErrors)(res.send(yield config_1.default.get()));
    });
});
systemRouter.post("/config", function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        (0, errors_1.handleAsyncRouteErrors)(res.send(yield config_1.default.set(req.body)));
    });
});
systemRouter.get("/debug", function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        notifications_1.default.notify("Hello World", "Greetings.");
        (0, errors_1.handleAsyncRouteErrors)(res.send(yield debug_1.default.all()));
    });
});
systemRouter.get("/motd", function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        (0, errors_1.handleAsyncRouteErrors)(res.send(yield update_1.default.getCurrentMotd()));
    });
});
systemRouter.get("/registration", function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        (0, errors_1.handleAsyncRouteErrors)(res.send(yield registration_2.default.getRegistrationAsync()));
    });
});
systemRouter.post("/registration", function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        (0, errors_1.handleAsyncRouteErrors)(res.send(yield registration_2.default.setRegistrationAsync(new registration_1.Registration(req.body))));
    });
});
systemRouter.get("/update", function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        (0, errors_1.handleAsyncRouteErrors)(res.send(yield update_1.default.getUpdateRequired()));
    });
});
systemRouter.post("/update", function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        logging_1.default.log("* BEGIN UPDATE", logging_1.default.LoggingCategories.SERVICES);
        var updated = yield update_1.default.doUpdate();
        (0, errors_1.handleAsyncRouteErrors)(res.send(updated));
        logging_1.default.log("* END UPDATE: post response", logging_1.default.LoggingCategories.SERVICES);
        if (updated) {
            // not going to exit here, we'll restar in the backend
            // process.exit();
        }
        // Logging.log("* POST: restarting node", Logging.LoggingCategories.SERVICES);
    });
});
systemRouter.get("/remote", function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        logging_1.default.log("* BEGIN REMOTE", logging_1.default.LoggingCategories.SERVICES);
        (0, errors_1.handleAsyncRouteErrors)(res.send(yield remote_1.default.getRemotePID()));
        logging_1.default.log("* END REMOTE: post response", logging_1.default.LoggingCategories.SERVICES);
    });
});
systemRouter.post("/remote", function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        logging_1.default.log("* BEGIN REMOTE", logging_1.default.LoggingCategories.SERVICES);
        (0, errors_1.handleAsyncRouteErrors)(res.send(yield remote_1.default.enableRemoteSSH()));
        logging_1.default.log("* END REMOTE: post response", logging_1.default.LoggingCategories.SERVICES);
    });
});
systemRouter.post("/remote/kill", function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        logging_1.default.log("* BEGIN REMOTE", logging_1.default.LoggingCategories.SERVICES);
        (0, errors_1.handleAsyncRouteErrors)(res.send(yield remote_1.default.disableRemoteSSH()));
        logging_1.default.log("* END REMOTE: post response", logging_1.default.LoggingCategories.SERVICES);
    });
});
systemRouter.post("/reboot", function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        logging_1.default.log("* BEGIN REBOOT", logging_1.default.LoggingCategories.SERVICES);
        (0, errors_1.handleAsyncRouteErrors)(res.send(yield config_1.default.reboot()));
        logging_1.default.log("* END REBOOT: post response", logging_1.default.LoggingCategories.SERVICES);
    });
});
exports.default = systemRouter;
// public getConfig = async (req: Request, res: Response, next: NextFunction) => {
//     systemConfig.get().then((output) => {
//         res.send(output);
//     });
// }
// public setConfig = async (req: Request, res: Response, next: NextFunction) => {
//     systemConfig.set(req.body).then((output) => {
//         res.send(output);
//     });
// }
// public getAllInfo = async (req: Request, res: Response, next: NextFunction) => {
//     systemInfo.getAllInfo().then((output) => {
//         res.send(output);
//     });
// }
// public getInfo = async (req: Request, res: Response, next: NextFunction) => {
//     systemInfo.getInfo().then((output) => {
//         res.send(output);
//     });
// }
// public getMemoryInfo = async (req: Request, res: Response, next: NextFunction) => {
//     systemInfo.getMemoryInfo().then((output) => {
//         res.send(output);
//     });
// }
// public update = async (req: Request, res: Response, next: NextFunction) => {
//     {
//         try {
//             const data = await Shell.executeAsyncWithError("git -C /opt/www pull");
//             const reload = data.stdout && data.stdout.indexOf("Already up to date.") === -1;
//             Logging.log("update required?: " + reload);
//             Logging.log("data.stdout: " + data.stdout);
//             Logging.log("data.stdout.indexOf('Already up to date.'): "
//                 + data.stdout.indexOf("Already up to date.").toString());
//             if (reload) {
//                 // Shell.executeAsync("/etc/init.d/S42node restart");
//                 res.send({ data: reload });
//                 Shell.spawn("/etc/init.d/S42node", ["start"], {
//                     detached: true,
//                     stdio: ["ignore"], // , out, err],
//                 }).unref();
//                 process.exit();
//             }
//             res.send({ data: reload });
//         } catch (error) {
//             throw new Error("Oops. Something isn't right. Please try to update again.");
//         }
//     }
// }
// // Network
// public getEthernet = async (req: Request, res: Response, next: NextFunction) => {
//     network.service(req.params.id).then((output) => {
//         res.send(output);
//     });
// }
// public setEthernet = async (req: Request, res: Response, next: NextFunction) => {
//     network
//         .setService(req.params.id, req.body)
//         .then((output) => {
//             res.send(output);
//         })
//         .then(() => {
//             if (req.body.reboot) {
//                 WSNotifications.Instance.Notify("notify.reboot", "notify.rebooting");
//                 reboot();
//             }
//         });
// }
// public reboot = async (req: Request, res: Response, next: NextFunction) => {
//     {
//         WSNotifications.Instance.Notify("notify.reboot", "notify.rebooting");
//         res.send(true);
//         reboot();
//     }
// }
// public shutdown = async (req: Request, res: Response, next: NextFunction) => {
//     WSNotifications.Instance.Notify("notify.poweroff", "notify.powering_off");
//     res.send(true);
//     shutdown();
// }
//# sourceMappingURL=system-controller.js.map