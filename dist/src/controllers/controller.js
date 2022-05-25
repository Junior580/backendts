"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
exports.home = (req, res) => {
    return res.status(200).sendFile(path_1.default.join(__dirname, "../view/index.html"));
};
exports.sobre = (req, res) => {
    return res.status(200).send("about");
};
exports.cadastro = (req, res) => {
    return res.status(200).send("about");
};
