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
const shairport_sync_service_config_1 = __importDefault(require("./shairport-sync-service-config"));
const configPath = "/opt/shairport-sync/shairport-sync.conf";
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
    logging_1.default.log(`config:`, logging_1.default.LoggingCategories.SHAIRPORT);
    logging_1.default.log(config, logging_1.default.LoggingCategories.SHAIRPORT);
    if (config instanceof output_1.Output) {
        data = yield buildConfig(config);
    }
    else {
        data = config;
    }
    logging_1.default.log(`configPath: ${configPath}`, logging_1.default.LoggingCategories.SHAIRPORT);
    logging_1.default.log(`data`, logging_1.default.LoggingCategories.SHAIRPORT);
    logging_1.default.log(data, logging_1.default.LoggingCategories.SHAIRPORT);
    const result = yield shell_1.default.makeFileAsync(configPath, data);
    if (result) {
        logging_1.default.log(result, logging_1.default.LoggingCategories.SHAIRPORT);
    }
    else {
        logging_1.default.log("Shairport failed to save config", logging_1.default.LoggingCategories.ERROR, true);
    }
    return result;
});
const loadConfig = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = (yield shell_1.default.readFileAsync(configPath, null));
    return data;
});
const buildConfig = (output) => __awaiter(void 0, void 0, void 0, function* () {
    const hwIndex = parseInt(output.output.replace("hw:", "").substring(0, 1), 10);
    const config = `general =
    {
        name = "A Cappella";
        output_backend = "alsa";
        mdns_backend = "avahi";
    };
    sessioncontrol =
    {
      run_this_before_play_begins = "/opt/mp/start_shairport-sync"; // make sure the application has executable permission. If it's a script, include the shebang (#!/bin/...) on the first line
      // run_this_after_play_ends = "/full/path/to/application and args"; // make sure the application has executable permission. If it's a script, include the shebang (#!/bin/...) on the first line
      wait_for_completion = "no"; // set to "yes" to get Shairport Sync to wait until the "run_this..." applications have terminated before continuing
      allow_session_interruption = "no"; // set to "yes" to allow another device to interrupt Shairport Sync while it's playing from an existing audio source
      session_timeout = 60; // wait for this number of seconds after a source disappears before terminating the session and becoming available again.
    };
    alsa =
    {
      output_device = "hw:${hwIndex},0"; // the name of the alsa output device. Use "alsamixer" or "aplay" to find out the names of devices, mixers, etc.
      // mixer_control_name = "PCM"; // the name of the mixer to use to adjust output volume. If not specified, volume in adjusted in software.
      // mixer_device = "default"; // the mixer_device default is whatever the output_device is. Normally you wouldn't have to use this.
      // output_rate = 44100; // can be 44100, 88200, 176400 or 352800, but the device must have the capability.
      // output_format = "S16"; // can be "U8", "S8", "S16", "S24", "S24_3LE", "S24_3BE" or "S32", but the device must have the capability. Except where stated using (*LE or *BE), endianness matches that of the processor.
    };
    dsp =
    {
      // loudness = "yes";                     // Activate the filter
      // loudness_reference_volume_db = -20.0; // Above this level the filter will have no effect anymore. Below this level it will gradually boost the low frequencies.
    };
    metadata =
    {
      enabled = "yes"; // set this to yes to get Shairport Sync to solicit metadata from the source and to pass it on via a pipe
      include_cover_art = "yes"; // set to "yes" to get Shairport Sync to solicit cover art from the source and pass it via the pipe. You must also set "enabled" to "yes".
      pipe_name = "/opt/shairport-sync/shairport-sync-metadata";
      // pipe_timeout = 5000; // wait for this number of milliseconds for a blocked pipe to unblock before giving up
      // socket_address = "226.0.0.1"; // if set to a host name or IP address, UDP packets containing metadata will be sent to this address. May be a multicast address. "socket-port" must be non-zero and "enabled" must be set to yes"
      // socket_port = 5555; // if socket_address is set, the port to send UDP packets to
      // socket_msglength = 65000; // the maximum packet size for any UDP metadata. This will be clipped to be between 500 or 65000. The default is 500.
    };
    diagnostics =
    {
      // disable_resend_requests = "no"; // set this to yes to stop Shairport Sync from requesting the retransmission of missing packets. Default is "no".
      // statistics = "no"; // set to "yes" to print statistics in the log
      // log_verbosity = 0; // "0" means no debug verbosity, "3" is most verbose.
      // log_show_time_since_startup = "no"; // set this to yes if you want the time since startup in the debug message -- seconds down to nanoseconds
      // log_show_time_since_last_message = "no"; // set this to yes if you want the time since the last debug message in the debug message -- seconds down to nanoseconds
      // drop_this_fraction_of_audio_packets = 0.0; // use this to simulate a noisy network where this fraction of UDP packets are lost in transmission. E.g. a value of 0.001 would mean an average of 0.1% of packets are lost, which is actually quite a high figure.
    };`;
    return config;
});
const service = {
    disable: () => __awaiter(void 0, void 0, void 0, function* () {
        const okStop = yield service.stop();
        const okDisable = yield system_v_1.default.Disable(service.name);
        return okStop && okDisable;
    }),
    enable: () => __awaiter(void 0, void 0, void 0, function* () {
        return yield system_v_1.default.Enable(service.name, shairport_sync_service_config_1.default);
    }),
    init,
    name: "S99shairport-sync",
    restart: () => system_v_1.default.Restart(service.name),
    start: () => system_v_1.default.Start(service.name),
    stop: () => system_v_1.default.Stop(service.name),
};
exports.default = {
    getConfig,
    saveConfig,
    service,
};
//# sourceMappingURL=index.js.map