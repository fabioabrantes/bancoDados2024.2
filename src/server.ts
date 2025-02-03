import express from 'express';

import RegisterUserController from './controller/user/registerController';
import RemoveUserController from './controller/user/removeUserController';
import AuthenticateController from './controller/user/authenticateController';
import UpdatedUserController from './controller/user/updatedUserController';
import ListAllUsersController from './controller/user/listAllUsersController';
import ListUserByIdController from './controller/user/ListUserByIdController';

import RegisterBookController from './controller/book/registerBookController';

const server = express();
server.use(express.json());

server.post('/users', RegisterUserController.handle);
server.post('/session', AuthenticateController.handle);
server.get('/users', ListAllUsersController.handle);
server.get('/users/:id', ListUserByIdController.handle);
server.put('/users/:id',UpdatedUserController.handle);
server.delete('/users/:id',RemoveUserController.handle);

server.post('/books/user/:id', RegisterBookController.handle);

server.listen(3333, () => {
  console.log('server listening on port 3333');
});
