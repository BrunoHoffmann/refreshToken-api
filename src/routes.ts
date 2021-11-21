import { Router } from "express";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";
import { AuthenticateUserController } from "./usueCases/authenticateUser/AuthenticateUserController";
import { CreateUserController } from "./usueCases/createUser/CreateUserController";
import { RefreshTokenUserController } from "./usueCases/refreshTokenUser/RefreshTokenUserController";

const router = Router();

const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();
const refreshTokenUserController = new RefreshTokenUserController();

router.post("/users", createUserController.handle);
router.post('/login', authenticateUserController.handle);
router.post('/refresh-token', refreshTokenUserController.handle);

router.get('/courses', ensureAuthenticated, (request, response) => {
  return response.json([
    { id: 1, name: 'NodeJS' },
    { id: 2, name: 'ReactJS' },
    { id: 3, name: 'VueJS' },
    { id: 4, name: 'NestJS' },
  ])
})

export { router };
