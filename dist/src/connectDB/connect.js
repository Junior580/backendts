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
const mongoose_1 = __importDefault(require("mongoose"));
const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;
const connectToDB = () => __awaiter(void 0, void 0, void 0, function* () {
    mongoose_1.default.connect(`mongodb+srv://${dbUser}:${dbPass}@cluster0.6n3zh.mongodb.net/?retryWrites=true&w=majority`, (error) => {
        if (error) {
            return console.log("error", error);
        }
        return console.log("Conexão com banco de dados realizada com sucesso.");
    });
});
exports.default = connectToDB;
