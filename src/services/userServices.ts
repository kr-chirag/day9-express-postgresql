import { UserInterface } from "../types/user";
import getDbClient from "../utils/database";
import bcrypt from "bcrypt";

export async function createUser({
    name,
    email,
    password,
}: Omit<UserInterface, "id">) {
    const hashedPassword = await bcrypt.hash(password, 10);
    const client = await getDbClient();
    const result = await client.query(
        `INSERT INTO users(name, email, password) VALUES('${name}','${email}','${hashedPassword}')`
    );
}

export async function getUser(email: string): Promise<UserInterface> {
    const client = await getDbClient();
    const result = await client.query(
        `SELECT * FROM users WHERE email='${email.trim()}' LIMIT 1`
    );
    return result.rows[0] as UserInterface;
}

export async function getUserById(id: number): Promise<UserInterface> {
    const client = await getDbClient();
    const result = await client.query(
        `SELECT * FROM users WHERE id='${id}' LIMIT 1`
    );
    return result.rows[0] as UserInterface;
}

export async function getAllUsers(): Promise<
    Omit<UserInterface, "password">[]
> {
    const client = await getDbClient();
    const result = await client.query(`SELECT id, name, email FROM users`);
    return result.rows as UserInterface[];
}
