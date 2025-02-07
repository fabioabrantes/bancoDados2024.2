import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

interface IPayload {
  id: string;
}
export function verifyTokenMiddleware(req: Request, res: Response, next: NextFunction) {
  const header = req.headers.authorization; 
  if (!header) {
    res.status(403).json({ message: "token inválido" });
    return;
  }

  // header = "Bearer figdlfnvfdnvlkfldnldfjfdojvdfvfdlnvlfdnvlfd"""
  const [Bearer, token] = header.split(' ');

  // validar se é o token gerado é válido com a chave utilizada e pegar os payload
  try {
    const { id } = verify(token, process.env.TOKEN_KEY!) as IPayload;
    console.log("id=>",id);
    req.userId= id;

    next();
  } catch (error) {
    res.status(403).json({ message: "token is not valid" })
  }
}