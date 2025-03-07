import express from "express";
import { Request, Response } from "express-serve-static-core";

const app = express();

app.get("/", (req: Request, res: Response) => {
    res.send("working...");
});

app.listen(3000, (error?: Error) => {
    if (error) console.log(error);
    else console.log("Server started at http://localhost:3000");
});
