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
exports.loginController = loginController;
exports.signupController = signupController;
const userServices_1 = require("../services/userServices");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function loginController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a;
        const { email, password } = req.body;
        const user = yield (0, userServices_1.getUser)(email);
        if (yield bcrypt_1.default.compare(password, (_a = user.password) !== null && _a !== void 0 ? _a : "")) {
            const authToken = jsonwebtoken_1.default.sign({ id: user.id }, "secretOrPrivateKey");
            res.cookie("auth-token", authToken);
            res.json({ status: "Sucess", message: "User logged in" });
        }
        else
            res.json({
                status: "error",
                error: "Invalid Password",
            });
    });
}
function signupController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { name, email, password } = req.body;
            yield (0, userServices_1.createUser)({ name, email, password });
            // res.json({ status: "Sucess", message: "User registered" });
            yield loginController(req, res);
        }
        catch (error) {
            if (error.code === "23505")
                res.json({
                    status: "error",
                    error: "This Email is already registered",
                });
            else
                res.json({ status: "error" });
        }
    });
}
