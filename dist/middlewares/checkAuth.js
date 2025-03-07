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
exports.checkAuth = checkAuth;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const userServices_1 = require("../services/userServices");
function checkAuth(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const cookies = req.cookies;
            if (cookies["auth-token"]) {
                const decodedToken = jsonwebtoken_1.default.decode(cookies["auth-token"]);
                const user = yield (0, userServices_1.getUserById)(decodedToken.id);
                req.user = user;
                next();
            }
            else {
                res.status(401).json({ message: "Unauthorized" });
            }
        }
        catch (error) {
            console.log("checkauth middleware error");
            console.log(error);
        }
    });
}
