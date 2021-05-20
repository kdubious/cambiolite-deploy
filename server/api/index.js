"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.API = void 0;
const bodyParser = __importStar(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const http_1 = require("http");
const path_1 = __importDefault(require("path"));
const config_1 = __importDefault(require("../config"));
const service_result_1 = require("../models/service-result");
const notifications_1 = __importDefault(require("../services/notifications"));
const logging_1 = __importDefault(require("../utils/logging"));
const audio_controller_1 = __importDefault(require("./audio-controller"));
const network_controller_1 = __importDefault(require("./network-controller"));
const system_controller_1 = __importDefault(require("./system-controller"));
class API {
    constructor() {
        this.category = logging_1.default.LoggingCategories.APP;
        this.port = process.env.PORT || 80;
        this.corsOptions = {
            optionsSuccessStatus: 200,
            origin: "http://localhost:4200",
        };
        this.logErrors = (err, req, res, next) => {
            logging_1.default.log("++++++++++++++++++++++++++++", logging_1.default.LoggingCategories.ZZZZZZZZZZZ, true);
            logging_1.default.log(err.stack, logging_1.default.LoggingCategories.ERROR, true);
            next(err);
        };
        this.errorHandler = (err, req, res, next) => {
            if (res.headersSent) {
                return next(err);
            }
            res.status(500);
            const result = new service_result_1.ServiceResult(err, err.message, false);
            res.status(500).contentType("json").send(result);
        };
        this.allowedExtensions = [
            '.js',
            '.ico',
            '.css',
            '.png',
            '.jpg',
            '.woff2',
            '.woff',
            '.ttf',
            '.svg',
        ];
        this.createApp();
        // this.configure();
        this.initializeMiddlewares();
        this.initializeRoutes();
        this.initializeErrorHandling();
        this.createAppServer();
        this.listen();
        this.sockets();
    }
    createApp() {
        this.app = express_1.default();
        logging_1.default.log("createApp()", this.category);
    }
    initializeMiddlewares() {
        // support application/json type post data
        this.app.use(bodyParser.json());
        // support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
        // static paths
        // CORS for debugging, at least
        this.app.use(cors_1.default(this.corsOptions));
        logging_1.default.log("     initializeMiddlewares()", this.category);
    }
    initializeRoutes() {
        // wire up controllers
        this.app.use("/api/system", system_controller_1.default);
        this.app.use("/api/audio", audio_controller_1.default);
        this.app.use("/api/network", network_controller_1.default);
        logging_1.default.log("     initializeRoutes()", this.category);
        // Redirect all the other resquests
        this.app.get('*', (req, res) => {
            if (this.allowedExtensions.filter(ext => req.url.indexOf(ext) > 0).length > 0) {
                res.sendFile(path_1.default.resolve(`${config_1.default.paths.ui}/${req.url}`));
            }
            else {
                res.sendFile(path_1.default.resolve(`${config_1.default.paths.ui}/index.html`));
            }
        });
    }
    initializeErrorHandling() {
        this.app.use(this.logErrors);
        this.app.use(this.errorHandler);
        logging_1.default.log("     initializeErrorHandling()", this.category);
    }
    createAppServer() {
        this.server = http_1.createServer(this.app);
        logging_1.default.log("     createServer()", this.category);
    }
    listen() {
        this.server.listen(this.port, () => {
            logging_1.default.log(`running server on port ${this.port}`, logging_1.default.LoggingCategories.HTTP);
        });
    }
    sockets() {
        notifications_1.default.init(this.server);
    }
}
exports.API = API;
//# sourceMappingURL=index.js.map