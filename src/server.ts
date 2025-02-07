import express from 'express';
import 'express-async-errors';

import RegisterUserController from './controller/user/registerController';
import RemoveUserController from './controller/user/removeUserController';
import AuthenticateController from './controller/user/authenticateController';
import UpdatedUserController from './controller/user/updatedUserController';
import ListAllUsersController from './controller/user/listAllUsersController';
import ListUserByIdController from './controller/user/ListUserByIdController';

import RegisterBookController from './controller/book/registerBookController';

import { verifyTokenMiddleware } from './middleware/verfyToken';
import { handleExceptionsMiddleware } from './middleware/tratadorErrorsMidleware';

const server = express();
server.use(express.json());

server.post('/users', RegisterUserController.handle);
server.post('/session', AuthenticateController.handle);

server.get('/users', verifyTokenMiddleware, ListAllUsersController.handle);
server.get('/users/:id', verifyTokenMiddleware, ListUserByIdController.handle);
server.put('/users/:id', verifyTokenMiddleware, UpdatedUserController.handle);
server.delete('/users/:id', verifyTokenMiddleware, RemoveUserController.handle);

server.post('/books/user/:id', verifyTokenMiddleware, RegisterBookController.handle);

server.use(handleExceptionsMiddleware);
server.listen(3333, () => {
  console.log('server listening on port 3333');
});
