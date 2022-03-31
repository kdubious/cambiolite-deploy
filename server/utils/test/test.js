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
Object.defineProperty(exports, "__esModule", { value: true });
exports.toUpper = exports.toLower = exports.test1 = void 0;
const test1 = (arg) => __awaiter(void 0, void 0, void 0, function* () {
    return arg.length;
});
exports.test1 = test1;
const toLower = (arg) => __awaiter(void 0, void 0, void 0, function* () {
    return arg.toLowerCase();
});
exports.toLower = toLower;
const toUpper = (arg) => __awaiter(void 0, void 0, void 0, function* () {
    return arg.toUpperCase();
});
exports.toUpper = toUpper;
//# sourceMappingURL=test.js.map