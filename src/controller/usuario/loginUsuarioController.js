import { getByEmail } from '../../model/usuarioModel.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const SECRET = process.env.JWT_SECRET || 'supersecretkey';

export const loginUsuarioController = async (req, res) => {
  const { email, senha } = req.body;

  const usuario = await getByEmail(email);
  if (!usuario) return res.status(404).json({ message: 'Usuário não encontrado' });

  const senhaValida = await bcrypt.compare(senha, usuario.senha);
  if (!senhaValida) return res.status(401).json({ message: 'Senha incorreta' });

  const token = jwt.sign({ id: usuario.id, email: usuario.email }, SECRET, { expiresIn: '1h' });

  res.json({ token });
};
