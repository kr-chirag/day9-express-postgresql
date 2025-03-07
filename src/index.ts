import "./config";
import express from "express";
import authRouter from "./routes/auth.routes";
import usersRouter from "./routes/users.route";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/auth", authRouter);
app.use("/users", usersRouter);

app.listen(3000, (error?: Error) => {
    if (error) console.log(error);
    else console.log("Server started at http://localhost:3000");
});
