"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const socket_io_1 = __importDefault(require("socket.io"));
const logging_1 = __importDefault(require("../../utils/logging"));
let initialized = false;
let io;
let notify_socket;
const init = (server) => {
    if (!initialized) {
        io = socket_io_1.default(server);
        notify_socket = io.of("/notify");
        notify_socket.on("connection", (socket) => {
            logging_1.default.log(`Notify channel connected from client: ${socket.handshake.address}`, logging_1.default.LoggingCategories.SOCKET);
        });
    }
    initialized = true;
};
const notify = (title = null, message, type, permanotice) => {
    const output = {
        message,
        permanotice,
        permaremove: "",
        title,
        type: (NotificationType[type]),
    };
    if (permanotice) {
        output.title = title;
        output.permanotice = false;
        output.permaremove = "";
    }
    else if (permanotice) {
        output.title = title;
        output.message = message;
        output.permanotice = false;
    }
    else {
        output.title = title;
        output.message = message;
    }
    notify_socket.emit("notify", output);
};
var NotificationType;
(function (NotificationType) {
    NotificationType[NotificationType["success"] = 1] = "success";
    NotificationType[NotificationType["info"] = 2] = "info";
    NotificationType[NotificationType["warning"] = 3] = "warning";
    NotificationType[NotificationType["danger"] = 4] = "danger";
    NotificationType[NotificationType["player"] = 5] = "player";
})(NotificationType || (NotificationType = {}));
const notifications = {
    init,
    notify,
    NotificationType
};
exports.default = notifications;
//# sourceMappingURL=index.js.map