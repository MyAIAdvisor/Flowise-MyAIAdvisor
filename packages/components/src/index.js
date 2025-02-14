"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = require("dotenv");
var path_1 = require("path");
var envPath = path_1.default.join(__dirname, '..', '..', '.env');
dotenv_1.default.config({ path: envPath, override: true });
__exportStar(require("./Interface"), exports);
__exportStar(require("./utils"), exports);
__exportStar(require("./speechToText"), exports);
__exportStar(require("./storageUtils"), exports);
__exportStar(require("./handler"), exports);
__exportStar(require("./followUpPrompts"), exports);
