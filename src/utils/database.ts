import { Pool, PoolClient } from "pg";

let tableCreated = false;

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "day9",
    password: "csp389817",
    port: 5432,
});

async function createTable(client: PoolClient) {
    console.log("Creating users table...");
    const result = await pool.query(
        "CREATE TABLE IF NOT EXISTS users (id SERIAL PRIMARY KEY, name VARCHAR, email VARCHAR UNIQUE, password VARCHAR)"
    );
    tableCreated = true;
    // console.log(result);
}

async function getDbClient() {
    const client = await pool.connect();
    if (!tableCreated) await createTable(client);
    return client;
}

export default getDbClient;
