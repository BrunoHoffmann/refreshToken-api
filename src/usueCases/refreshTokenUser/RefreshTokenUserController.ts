import { Request, Response } from "express";
import { RefreshTokenUserUserCase } from "./RefreshTokenUserUseCase";

class RefreshTokenUserController {
  async handle(request: Request, response: Response) {
    const { refresh_token } = request.body;

    const refreshTokenUserUserCase = new RefreshTokenUserUserCase();

    const token = await refreshTokenUserUserCase.execute(refresh_token);

    return response.json(token);
  }
}

export { RefreshTokenUserController };