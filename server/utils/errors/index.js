"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleAsyncRouteErrors = void 0;
const logging_1 = __importDefault(require("../logging"));
exports.handleAsyncRouteErrors = (fn) => {
    return (req, res, next, ...rest) => {
        try {
            const promise = fn(req, res, next, ...rest);
            if (!promise || !promise.catch) {
                logging_1.default.log("=== !promise || !promise.catch ===", logging_1.default.LoggingCategories.ERROR);
                return;
            }
            promise.catch((err) => {
                logging_1.default.log("==========================", logging_1.default.LoggingCategories.ERROR);
                logging_1.default.log(err, logging_1.default.LoggingCategories.ERROR);
                logging_1.default.log("==========================", logging_1.default.LoggingCategories.ERROR);
                next(err);
            });
        }
        catch (error) {
            logging_1.default.log("===========|", logging_1.default.LoggingCategories.ERROR);
            logging_1.default.log(error, logging_1.default.LoggingCategories.ERROR);
            logging_1.default.log("===========|", logging_1.default.LoggingCategories.ERROR);
            next(error);
        }
    };
};
//# sourceMappingURL=index.js.map