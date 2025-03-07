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
exports.createUser = createUser;
exports.getUser = getUser;
exports.getUserById = getUserById;
exports.getAllUsers = getAllUsers;
const database_1 = __importDefault(require("../utils/database"));
const bcrypt_1 = __importDefault(require("bcrypt"));
function createUser(_a) {
    return __awaiter(this, arguments, void 0, function* ({ name, email, password, }) {
        const hashedPassword = yield bcrypt_1.default.hash(password, 10);
        const client = yield (0, database_1.default)();
        const result = yield client.query(`INSERT INTO users(name, email, password) VALUES('${name}','${email}','${hashedPassword}')`);
    });
}
function getUser(email) {
    return __awaiter(this, void 0, void 0, function* () {
        const client = yield (0, database_1.default)();
        const result = yield client.query(`SELECT * FROM users WHERE email='${email.trim()}' LIMIT 1`);
        return result.rows[0];
    });
}
function getUserById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const client = yield (0, database_1.default)();
        const result = yield client.query(`SELECT * FROM users WHERE id='${id}' LIMIT 1`);
        return result.rows[0];
    });
}
function getAllUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        const client = yield (0, database_1.default)();
        const result = yield client.query(`SELECT id, name, email FROM users`);
        return result.rows;
    });
}
