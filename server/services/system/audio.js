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
const output_1 = require("../../models/output");
const service_result_1 = require("../../models/service-result");
const logging_1 = __importDefault(require("../../utils/logging"));
const shell_1 = __importDefault(require("../../utils/shell"));
const db_1 = __importDefault(require("../db"));
const notifications_1 = __importDefault(require("../notifications"));
const roon_1 = __importDefault(require("../players/roon"));
const getSoundCards = () => __awaiter(void 0, void 0, void 0, function* () {
    const grep = `cat /proc/asound/cards | grep -e '^ [0-9]' | sed 's/^ //' | sed 's/ \\[.* - //'`;
    logging_1.default.log(grep, logging_1.default.LoggingCategories.SYSTEM);
    const cardData = yield shell_1.default.executeAsync(grep);
    logging_1.default.log(cardData, logging_1.default.LoggingCategories.SYSTEM);
    const cards = cardData.split("\n");
    return cards
        .filter((item) => item.length > 0)
        .map((value, index) => {
        return {
            hwname: `hw:${index},0`,
            index,
            name: value.substring(1),
            subindex: 0,
        };
    });
});
const hasUsbCard = () => __awaiter(void 0, void 0, void 0, function* () {
    const aplay = yield shell_1.default.executeAsync("aplay -l");
    return (aplay.indexOf("card 1:") > -1);
});
const getAudioConfig = () => __awaiter(void 0, void 0, void 0, function* () {
    const audioConf = yield db_1.default.get("audio:output");
    return new output_1.Output(audioConf);
});
const setAudioConfig = (output) => __awaiter(void 0, void 0, void 0, function* () {
    let svcResult;
    logging_1.default.log(output, logging_1.default.LoggingCategories.SERVICES);
    if (output.isUsb) {
        const valid = yield audio.hasUsbCard();
        if (!valid) {
            const invalidMsg = "There's no USB card attached, or at least we don't see it. Please check the connection and try again.";
            svcResult = new service_result_1.ServiceResult(output, invalidMsg, false);
            return svcResult;
        }
    }
    let multi = db_1.default.getMulti();
    multi = db_1.default.multiSet("audio:output", JSON.stringify(output), multi);
    logging_1.default.log(output, logging_1.default.LoggingCategories.SERVICES);
    const r = (restart) => __awaiter(void 0, void 0, void 0, function* () {
        return roon_1.default.saveConfig(output).then((roonOk) => {
            if (!roonOk) {
                return false;
            }
            if (restart) {
                return roon_1.default.service.restart();
            }
            return true;
        });
    });
    if (r(true)) {
        const ok = yield db_1.default.multiExecAsync(multi);
        logging_1.default.log(ok, logging_1.default.LoggingCategories.SERVICES);
        if (ok) {
            svcResult = new service_result_1.ServiceResult(output, "", true);
        }
        else {
            const invalidMsg = "We weren't able to save the update.";
            svcResult = new service_result_1.ServiceResult(null, invalidMsg, false);
            notifications_1.default.notify("Audio Output", invalidMsg, notifications_1.default.NotificationType.warning);
            svcResult = new service_result_1.ServiceResult(yield getAudioConfig(), "", true);
        }
        // }
    }
    else {
        // TODO: revert?
        logging_1.default.log("DB.multiDiscardAsync(multi);", logging_1.default.LoggingCategories.SERVICES);
        yield db_1.default.multiDiscardAsync(multi);
        svcResult = new service_result_1.ServiceResult(yield getAudioConfig(), "", true);
    }
    return svcResult;
});
const audio = {
    getSoundCards,
    hasUsbCard,
    getAudioConfig,
    setAudioConfig,
};
exports.default = audio;
//# sourceMappingURL=audio.js.map