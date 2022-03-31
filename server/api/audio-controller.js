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
const output_1 = require("../models/output");
const service_result_1 = require("../models/service-result");
const audio_1 = __importDefault(require("../services/system/audio"));
const errors_1 = require("../utils/errors");
var audioRouter = express_1.default.Router();
audioRouter.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});
audioRouter.get('/config', function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        (0, errors_1.handleAsyncRouteErrors)(res.send(yield audio_1.default.getAudioConfig()));
    });
});
audioRouter.post('/config', function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        (0, errors_1.handleAsyncRouteErrors)(res.send(yield audio_1.default.setAudioConfig(new output_1.Output(req.body))));
    });
});
audioRouter.get('/outputs', function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        (0, errors_1.handleAsyncRouteErrors)(getSoundCards(req, res, next));
    });
});
audioRouter.get('/strategies', function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        (0, errors_1.handleAsyncRouteErrors)(getSoundCards(req, res, next));
    });
});
const getSoundCards = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const cards = yield audio_1.default.getSoundCards();
    const options = cards.map((card) => {
        return { value: card.hwname, label: card.name };
    });
    const svcResult = new service_result_1.ServiceResult(options);
    res.status(200).send(svcResult);
});
exports.default = audioRouter;
//# sourceMappingURL=audio-controller.js.map