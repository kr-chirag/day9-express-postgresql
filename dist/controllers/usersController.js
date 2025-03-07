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
exports.getUserController = getUserController;
exports.getAllUsersController = getAllUsersController;
const userServices_1 = require("../services/userServices");
function getUserController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id, name, email } = yield (0, userServices_1.getUserById)(req.params.id);
        res.json({ id, name, email });
    });
}
function getAllUsersController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const users = yield (0, userServices_1.getAllUsers)();
        res.json(users);
    });
}
