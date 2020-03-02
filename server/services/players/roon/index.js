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
const output_1 = require("../../../models/output");
const system_v_1 = __importDefault(require("../../../models/system-v"));
const logging_1 = __importDefault(require("../../../utils/logging"));
const shell_1 = __importDefault(require("../../../utils/shell"));
const roon_service_config_1 = __importDefault(require("./roon-service-config"));
const configPath = "/opt/roon/config.json";
const init = () => __awaiter(void 0, void 0, void 0, function* () {
    return true;
});
const getConfig = (output) => __awaiter(void 0, void 0, void 0, function* () {
    if (output) {
        return buildConfig(output);
    }
    else {
        return yield loadConfig();
    }
});
const saveConfig = (config) => __awaiter(void 0, void 0, void 0, function* () {
    let data;
    logging_1.default.log(`config:`, logging_1.default.LoggingCategories.RAAT);
    logging_1.default.log(config, logging_1.default.LoggingCategories.RAAT);
    if (config instanceof output_1.Output) {
        data = buildConfig(config);
    }
    else {
        data = config;
    }
    logging_1.default.log(`configPath: ${configPath}`, logging_1.default.LoggingCategories.RAAT);
    logging_1.default.log(`data`, logging_1.default.LoggingCategories.RAAT);
    logging_1.default.log(data, logging_1.default.LoggingCategories.RAAT);
    const result = yield shell_1.default.makeFileAsync(configPath, JSON.stringify(data));
    if (result) {
        logging_1.default.log(result, logging_1.default.LoggingCategories.RAAT);
    }
    else {
        logging_1.default.log("Roon failed to save config", logging_1.default.LoggingCategories.ERROR, true);
    }
    return result;
});
const loadConfig = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = (yield shell_1.default.readFileAsync(configPath, null));
    const obj = JSON.parse(data);
    return obj;
});
const buildConfig = (output) => {
    const vendor = "Musica Pristina";
    // TODO: upgrade to AC III
    const model = "A Cappella II";
    const configUrl = "http://__SELF__/";
    const serial = "PENDING";
    const version = "3.0.0";
    const uniqueId = "4a82f59f-223b-42d3-0122-dacdacdac999";
    const hwIndex = parseInt(output.output.replace("hw:", "").substring(0, 1), 10);
    const outputSection = {
        buffer_duration: output.bufferDuration,
        device: `hw:${hwIndex},0`,
        // TODO: restrict our I2S to force DOP?
        // dsd_mode: hwIndex === 0 ? "dop" : output.dop ? "dop" : "native",
        dsd_mode: output.dop ? "dop" : "native",
        max_dsd_rate: 512,
        signal_path: [
            {
                method: hwIndex === 0 ? "i2s" : "usb",
                quality: "lossless",
                type: "output",
            },
        ],
        type: "alsa",
    };
    const volumeSection = {
        device: `hw:${hwIndex}`,
        type: output.volume ? "software" : "none",
    };
    const sourceSelectionSection = {
        source_selection_command: "/opt/mp/start_raat",
        type: "mp",
    };
    const watchSection = {
        device: `hw:${hwIndex}`,
        lost_action: hwIndex === 0 ? "" : "exit",
        type: "alsa",
    };
    return {
        config_url: configUrl,
        model,
        output: outputSection,
        serial,
        source_selection: sourceSelectionSection,
        unique_id: uniqueId,
        vendor,
        version,
        volume: volumeSection,
        watch: watchSection,
    };
};
const service = {
    disable: () => __awaiter(void 0, void 0, void 0, function* () {
        const okStop = yield service.stop();
        const okDisable = yield system_v_1.default.Disable(service.name);
        return (okStop && okDisable);
    }),
    enable: () => __awaiter(void 0, void 0, void 0, function* () {
        return yield system_v_1.default.Enable(service.name, roon_service_config_1.default);
    }),
    init,
    name: "S98raat",
    restart: () => system_v_1.default.Restart(service.name),
    start: () => system_v_1.default.Start(service.name),
    stop: () => system_v_1.default.Stop(service.name),
};
// const Roon = {
//   getConfig,
//   saveConfig,
//   service,
// };
exports.default = {
    getConfig,
    saveConfig,
    service,
};
//# sourceMappingURL=index.js.map