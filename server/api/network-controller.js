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
const network_1 = require("../models/network");
const network_2 = __importDefault(require("../services/system/network"));
const errors_1 = require("../utils/errors");
var networkRouter = express_1.default.Router();
networkRouter.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});
networkRouter.get('/config', function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        errors_1.handleAsyncRouteErrors(res.send(yield network_2.default.getNetworkConnmanAsync()));
    });
});
networkRouter.post('/config', function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        errors_1.handleAsyncRouteErrors(res.send(yield network_2.default.setNetworkAsync(new network_1.Network(req.body))));
    });
});
exports.default = networkRouter;
//# sourceMappingURL=network-controller.js.map