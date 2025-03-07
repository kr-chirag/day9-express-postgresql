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
const pg_1 = require("pg");
let tableCreated = false;
const pool = new pg_1.Pool({
    user: "postgres",
    host: "localhost",
    database: "day9",
    password: "csp389817",
    port: 5432,
});
function createTable(client) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("Creating users table...");
        const result = yield pool.query("CREATE TABLE IF NOT EXISTS users (id SERIAL PRIMARY KEY, name VARCHAR, email VARCHAR UNIQUE, password VARCHAR)");
        tableCreated = true;
        // console.log(result);
    });
}
function getDbClient() {
    return __awaiter(this, void 0, void 0, function* () {
        const client = yield pool.connect();
        if (!tableCreated)
            yield createTable(client);
        return client;
    });
}
exports.default = getDbClient;
