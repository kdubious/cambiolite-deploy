"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceResult = void 0;
class ServiceResult {
    constructor(data, message, success = true) {
        this.data = data;
        this.message = message;
        this.success = success;
    }
}
exports.ServiceResult = ServiceResult;
//# sourceMappingURL=service-result.js.map