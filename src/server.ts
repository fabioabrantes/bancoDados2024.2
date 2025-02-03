import express from 'express';

import RegisterUserController from './controller/user/registerController';
import RemoveUserController from './controller/user/removeUserController';
import AuthenticateController from './controller/user/authenticateController';

const server = express();
server.use(express.json());

server.post('/users', RegisterUserController.handle);
server.post('/session', AuthenticateController.handle);
server.delete('/users',RemoveUserController.handle);
server.listen(3333, () => {
  console.log('server listening on port 3333');
})
