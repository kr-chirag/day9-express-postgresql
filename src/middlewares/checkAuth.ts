import { NextFunction, Request, Response } from "express-serve-static-core";
import jwt from "jsonwebtoken";
import { getUserById } from "../services/userServices";

export async function checkAuth(
    req: Request,
    res: Response,
    next: NextFunction
) {
    try {
        const cookies = req.cookies as any;
        if (cookies["auth-token"]) {
            const decodedToken = jwt.decode(cookies["auth-token"]) as {
                id: number;
            };
            const user = await getUserById(decodedToken.id);
            req.user = user;
            next();
        } else {
            res.status(401).json({ message: "Unauthorized" });
        }
    } catch (error) {
        console.log("checkauth middleware error");
        console.log(error);
    }
}
