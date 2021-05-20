"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Output = void 0;
const logging_1 = __importDefault(require("../utils/logging"));
class Output {
    constructor(jsonData) {
        this.output = "";
        this.dop = false;
        this.volume = false;
        this.mute = false;
        this.bufferDuration = 0.04;
        this.maxBits = 32;
        this.strategy = 1 /* OCXO */;
        Object.assign(this, jsonData);
    }
    get hwIndex() {
        try {
            logging_1.default.log(this.output, logging_1.default.LoggingCategories.PLAYER);
            const idx = this.output.replace("hw:", "").substring(0, 1);
            logging_1.default.log(idx, logging_1.default.LoggingCategories.PLAYER);
            return parseInt(idx, 10);
        }
        catch (err) {
            return -1;
        }
    }
    get isUsb() {
        return this.hwIndex > 0;
    }
}
exports.Output = Output;
//# sourceMappingURL=output.js.map