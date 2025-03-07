import { Request, Response } from "express-serve-static-core";
import { createUser, getUser } from "../services/userServices";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function loginController(req: Request, res: Response) {
    const { email, password } = req.body;
    const user = await getUser(email);
    if (await bcrypt.compare(password, user.password ?? "")) {
        const authToken = jwt.sign({ id: user.id }, "secretOrPrivateKey");
        res.cookie("auth-token", authToken);
        res.json({ status: "Sucess", message: "User logged in" });
    } else
        res.json({
            status: "error",
            error: "Invalid Password",
        });
}

export async function signupController(req: Request, res: Response) {
    try {
        const { name, email, password } = req.body;
        await createUser({ name, email, password });
        // res.json({ status: "Sucess", message: "User registered" });
        await loginController(req, res);
    } catch (error: any) {
        if (error.code === "23505")
            res.json({
                status: "error",
                error: "This Email is already registered",
            });
        else res.json({ status: "error" });
    }
}
