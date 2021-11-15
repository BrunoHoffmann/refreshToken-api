import { NextFunction, Request, Response } from 'express';

export function ensureAuthenticated(request, response, next)