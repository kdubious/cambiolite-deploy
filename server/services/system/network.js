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
const network_1 = require("../../models/network");
const shell_1 = __importDefault(require("../../utils/shell"));
const getNetworkAsync = () => __awaiter(void 0, void 0, void 0, function* () {
    const eth = "eth0";
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            let nw = new network_1.Network();
            nw.type = yield getNetworkTypeAsync();
            let rslt = yield shell_1.default.executeAsync("ip addr list " + eth + " |grep \"inet \" |cut -d' ' -f6|cut -d/ -f1");
            nw.ip = rslt.split("\n")[0];
            rslt = yield shell_1.default.executeAsync("ip addr list " + eth + " |grep \"inet \" |cut -d' ' -f6|cut -d/ -f2");
            nw.sm = rslt.split("\n")[0];
            rslt = yield shell_1.default.executeAsync("route -n |grep \"0.0.0.0\" |grep \"UG\" |cut -d' ' -f10");
            nw.gw = rslt.split("\n")[0];
            rslt = yield shell_1.default.executeAsync("cat /etc/resolv.conf |grep \"nameserver\" |cut -d' ' -f2");
            const allDns = rslt.split("\n");
            allDns.forEach((value, index) => {
                if (value !== "") {
                    nw.dns_1 = value;
                }
            });
            resolve(nw);
        }
        catch (e) {
            reject(e);
        }
    }));
});
const setNetworkAsync = (network) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let settings = "";
        if (network.type == 0 /* DHCP */) {
            settings = DHCP;
        }
        else {
            settings = STATIC(network.ip, network.sm, network.gw);
            // sed - e "s/@ip/$IP/g" - e "s/@sm/$SM/g" - e "s/@gw/$GW/g" / opt / mp / static > /etc/network / interfaces
        }
        yield shell_1.default.spawn(`echo "${settings}" > /etc/network/interfaces && ifdown eth0 && sleep 2 && ifup eth0`);
        // await Shell.executeAsync("ifdown eth0");
        // await Shell.executeAsync("ifup eth0");
        return network;
    }
    catch (e) {
        throw e;
    }
});
const DHCP = `auto lo
iface lo inet loopback

auto eth0
iface eth0 inet dhcp`;
const STATIC = (ip, sm, gw) => {
    return `auto lo
iface lo inet loopback

auto eth0
iface eth0 inet static
address ${ip}
netmask ${sm}
gateway ${gw}
dns 4.2.2.2 8.8.8.8`;
};
const getNetworkTypeAsync = () => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            let val = yield shell_1.default.executeAsync("cat /etc/network/interfaces |grep \"iface eth0 inet \" |cut -d' ' -f4");
            if (val.split("\n")[0] === "static") {
                resolve(1 /* Static */);
            }
            else {
                resolve(0 /* DHCP */);
            }
        }
        catch (e) {
            return new Error(e);
        }
    }));
});
const network = {
    getNetworkAsync,
    setNetworkAsync,
};
exports.default = network;
//# sourceMappingURL=network.js.map