"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Registration = void 0;
class Registration {
    constructor(jsonData) {
        this.first_use = true;
        this.name = '';
        this.email = '';
        this.serial_number = '';
        this.purchase_date = '';
        this.device_id = '';
        this.firmware = '';
        this.model = '';
        Object.assign(this, jsonData);
    }
}
exports.Registration = Registration;
//# sourceMappingURL=registration.js.map