import { UserInterface } from "./user";

declare global {
    namespace Express {
        interface Request {
            user?: UserInterface; // Add user property, assuming User is your user model or type
        }
    }
}

export {};
