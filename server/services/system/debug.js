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
const shell_1 = __importDefault(require("../../utils/shell"));
const tpl = (debug, elapsed) => `
# Roon config file (cat /opt/roon/config.json)
----------------------------------------------------------------------
${debug.roonConfig}

# Sound Signature (optimization profiles)
----------------------------------------------------------------------
${debug.soundSignature}

# System load statistics (ps ww)
----------------------------------------------------------------------
${debug.systemLoad}

# Active processes (ps ww)
----------------------------------------------------------------------
${debug.processes}

# Card list (cat /proc/asound/cards)
----------------------------------------------------------------------
${debug.audioCards}

# Playback devices (aplay -l)
----------------------------------------------------------------------
${debug.playbackDevices}

# Simple mixer controls (amixer scontrols)
----------------------------------------------------------------------
${debug.mixerSimpleControls}

# Mixer controls (amixer controls)
----------------------------------------------------------------------
${debug.mixerControls}

# MPD audio outputs status (mpc outputs)
----------------------------------------------------------------------
${debug.mpdOutputs}

# MPD version (mpd --version)
----------------------------------------------------------------------
${debug.mpdVersion}

# MPD config file (cat /opt/mpd/mpd.conf)
----------------------------------------------------------------------
${debug.mpdConfig}

# Kernel module snd_usb_audio settings (systool -v -m snd_usb_audio)
----------------------------------------------------------------------
${debug.usbAudioSettings}

# Systemd active startup scripts
# (ls -lah /etc/systemd/system/multi-user.target.wants/)
----------------------------------------------------------------------
${debug.systemdStartup}

# Filesystem mounts (cat /proc/mounts)
----------------------------------------------------------------------
${debug.mounts}

# Filesystem mounts - free space (df -h)
----------------------------------------------------------------------
${debug.mountsSpace}

# Loaded kernel modules (lsmod)
----------------------------------------------------------------------
${debug.kernelModules}

# Network listening sockets (netstat -ln)
----------------------------------------------------------------------
${debug.listeningSockets}

# Network established sockets (netstat -n)
----------------------------------------------------------------------
${debug.establishedSockets}

# Network interfaces (ip addr)
----------------------------------------------------------------------
${debug.networkInterfaces}

# Network interfaces (ifconf)
----------------------------------------------------------------------
${debug.networkInterfacesAlt}

# List all USB devices (lsusb)
----------------------------------------------------------------------
${debug.usbDevices}

# Kernel status (dmesg)
----------------------------------------------------------------------
${debug.kernelStatus}

# Node.js and NPM version (node -v && npm -v)
----------------------------------------------------------------------
${debug.nodeVersion}


Debug data collected in ${elapsed} seconds.

`;
const cmd = (command, errorMessage) => shell_1.default.executeAsync(command)
    .catch((error) => errorMessage || error);
const systemDebug = {
    all() {
        const keys = [
            "roonConfig",
            "soundSignature",
            "systemLoad",
            "processes",
            "audioCards",
            "playbackDevices",
            "mixerSimpleControls",
            "mixerControls",
            // "mpdOutputs",
            // "mpdVersion",
            // "mpdConfig",
            // "usbAudioSettings",
            // "systemdStartup",
            // "mounts",
            // "mountsSpace",
            "kernelModules",
            "listeningSockets",
            "establishedSockets",
            "networkInterfaces",
            "networkInterfacesAlt",
            // "networkProfiles",
            // "wifiStatus",
            // "usbDevices",
            "kernelStatus",
            "nodeVersion",
        ];
        const hrstart = process.hrtime();
        return Promise.all(keys.map((key) => systemDebug[key]())).then((data) => {
            const debug = {};
            data.forEach((set, index) => {
                debug[keys[index]] = set;
            });
            return tpl(debug, process.hrtime(hrstart));
        });
    },
    audioCards: () => cmd("cat /proc/asound/cards"),
    establishedSockets: () => cmd("netstat -n"),
    kernelModules: () => cmd("lsmod"),
    kernelStatus: () => cmd("dmesg"),
    listeningSockets: () => cmd("netstat -ln"),
    mixerControls: () => cmd("amixer controls"),
    mixerSimpleControls: () => cmd("amixer scontrols"),
    mounts: () => cmd("cat /proc/mounts"),
    mountsSpace: () => cmd("df -h"),
    mpdConfig: () => cmd("cat /etc/mpd.conf"),
    mpdOutputs: () => cmd("mpc outputs"),
    mpdVersion: () => cmd("mpd --version"),
    networkInterfaces: () => cmd("ip addr"),
    networkInterfacesAlt: () => cmd("ifconfig"),
    networkProfiles: () => cmd("netctl list"),
    nodeVersion: () => cmd("node -v && npm -v"),
    processes: () => cmd("ps ww"),
    playbackDevices: () => cmd("aplay -l"),
    roonConfig: () => __awaiter(void 0, void 0, void 0, function* () { return JSON.stringify(JSON.parse(yield cmd("cat /opt/roon/config.json")), null, 2); }),
    soundSignature: () => cmd("cat /sys/module/snd_soc_mp_codec/parameters/ocxo")
        .then((data) => {
        return data ? "Oven Controlled Crystal Oscillator (OCXO)" : "Dual Frequency Crystal Oscillators (DFXO)";
    }),
    systemdStartup: () => cmd("ls -lah /etc/systemd/system/multi-user.target.wants/"),
    systemLoad: () => cmd("ps ww"),
    usbAudioSettings: () => cmd("systool -v -m snd_usb_audio"),
    usbDevices: () => cmd("lsusb"),
    wifiStatus: () => cmd("iwconfig"),
};
exports.default = systemDebug;
//# sourceMappingURL=debug.js.map