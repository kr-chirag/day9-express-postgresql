"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const usersController_1 = require("../controllers/usersController");
const checkAuth_1 = require("../middlewares/checkAuth");
const usersRouter = express_1.default.Router();
usersRouter.use(checkAuth_1.checkAuth);
usersRouter.get("/", usersController_1.getAllUsersController);
usersRouter.get("/:id", usersController_1.getUserController);
exports.default = usersRouter;
