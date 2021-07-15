import { Router } from 'express';
import { CreateUserController } from './usueCases/createUser/createUserController';

const router = Router();

const createUserController = new CreateUserController();

router.post('/users', )

export { router }