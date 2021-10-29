import { Response } from 'express';

export default function handleError(res: Response, error: Error) {
    const message = (error as Error).message;
    console.log(`Database Error: ${message}`);
    res.sendStatus(500);
}