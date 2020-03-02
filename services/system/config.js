"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importDefault(require("../db"));
// SYSTEM CONFIGURATION
// ==============================================================
const systemConfig = {
    get: () => db_1.default.get("state:system:config"),
    set: (data) => db_1.default.set("state:system:config", data),
};
exports.default = systemConfig;
//# sourceMappingURL=config.js.map