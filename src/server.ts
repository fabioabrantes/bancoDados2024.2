import express from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const server = express();
server.use(express.json());

server.post('/users', async (req, res) => {
  const dados = req.body;
  //validação

  const user = await prisma.user.create({
    data: {
      email: dados.email,
      cpf: dados.cpf,
      name: dados.description
    }
  });

 
  res.status(201).json({ message: "ucadastro realizado com sucesso" });

});
server.listen(3333, () => {
  console.log('server listening on port 3333');
})
