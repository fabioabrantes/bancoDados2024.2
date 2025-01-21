import express from 'express';

import  RegisterUser from './useCase/registerUser';

const server = express();
server.use(express.json());

server.post('/users', async (req, res) => {
  const dados = req.body;
  const user = {
    cpf: dados.cpf,
    name: dados.name,
    email: dados.email,// default role é 'user'
  }
  //validação
  const userCreated = RegisterUser.execute(user);
  res.status(201).json({ message: "ucadastro realizado com sucesso" });

});
server.listen(3333, () => {
  console.log('server listening on port 3333');
})
