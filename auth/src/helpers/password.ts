import { scrypt, randomBytes } from 'crypto';
import { promisify } from 'util';

const scryptAsync = promisify(scrypt);

export class Password {
    static async toHash(password: string): Promise<string> {
        const salt = randomBytes(8).toString('hex');
        const hashedPassword = await scryptAsync(password, salt, 32) as Buffer;

        return `${hashedPassword.toString('hex')}.${salt}`;
    }

    static async compare(storedPassword: string, suppliedPassword: string): Promise<boolean> {
        const [hashedPassword, salt] = storedPassword.split('.');

        if (!salt) {
            return false;
        }

        const hashedSuppliedPassword = await scryptAsync(suppliedPassword, salt, 32) as Buffer;

        return hashedPassword === hashedSuppliedPassword.toString('hex');
    }
};
