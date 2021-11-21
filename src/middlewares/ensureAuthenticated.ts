import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
  const authToken = request.headers.authorization;

  if (!authToken) {
    return response.status(401).json({
      message: 'Token is missing'
    });
  }

  const [, token] = authToken.split(' ');

  try {
    verify(token, '025fa5dd-77ea-40a5-8c1a-ed9dfbd6a1b5');

    return next();
  } catch (err) {
    return response.status(401).json({
      message: 'Token invalid'
    })
  }
}