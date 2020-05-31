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
const registration_1 = require("../../models/registration");
const db_1 = __importDefault(require("../db"));
const getRegistrationAsync = () => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const registrationData = yield db_1.default.get("registration:data");
            let reg = new registration_1.Registration(registrationData);
            reg.device_id = yield db_1.default.get("device:id");
            reg.serial_number = yield db_1.default.get("device:serial");
            resolve(reg);
        }
        catch (e) {
            reject(e);
        }
    }));
});
const setRegistrationAsync = (registration) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield db_1.default.set("registration:data", registration);
        return registration;
    }
    catch (e) {
        throw e;
    }
});
const registration = {
    getRegistrationAsync,
    setRegistrationAsync,
};
exports.default = registration;
//# sourceMappingURL=registration.js.map