import express from "express";
import {
    getAllUsersController,
    getUserController,
} from "../controllers/usersController";
import { checkAuth } from "../middlewares/checkAuth";

const usersRouter = express.Router();

usersRouter.use(checkAuth);

usersRouter.get("/", getAllUsersController);
usersRouter.get("/:id", getUserController);

export default usersRouter;
