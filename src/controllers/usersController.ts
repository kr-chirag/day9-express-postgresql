import { Request, Response } from "express-serve-static-core";
import { getAllUsers, getUserById } from "../services/userServices";

export async function getUserController(
    req: Request<{ id: number }>,
    res: Response
) {
    const { id, name, email } = await getUserById(req.params.id);
    res.json({ id, name, email });
}
export async function getAllUsersController(req: Request, res: Response) {
    const users = await getAllUsers();
    res.json(users);
}
