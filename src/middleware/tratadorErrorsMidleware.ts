import { Request, Response, NextFunction } from 'express';
import { ErrorCustom } from '../errors/ErrorsCustom';
export function handleExceptionsMiddleware(error: Error, req: Request, res: Response, next: NextFunction) {
  if (error instanceof ErrorCustom) {
    res.status(error.status).json({ message: error.message });
  }

  res.status(500).json({
    status: "Error",
    message: "Internal server error"
  });
}