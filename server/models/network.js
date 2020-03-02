"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Network {
    constructor(jsonData) {
        this.type = 0 /* DHCP */;
        this.ip = "";
        this.sm = "";
        this.gw = "";
        this.dns_1 = "";
        this.dns_2 = "";
        if (jsonData) {
            Object.assign(this, jsonData);
        }
    }
    networkTypeName() {
        switch (this.type) {
            case 1 /* Static */:
                return "Static";
            case 0 /* DHCP */:
                return "DHCP";
            default:
                return "";
        }
    }
}
exports.Network = Network;
//# sourceMappingURL=network.js.map