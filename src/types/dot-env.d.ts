import { UserInterface } from "./user";

declare global {
    namespace Express {
        interface process {
            PORT: number;
        }
    }
}
