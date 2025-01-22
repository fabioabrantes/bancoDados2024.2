import express from 'express';

import RegisterUserController from './controller/user/registerController';

const server = express();
server.use(express.json());

server.post('/users', RegisterUserController.handle);
server.listen(3333, () => {
  console.log('server listening on port 3333');
})
