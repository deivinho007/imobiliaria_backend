import { getByEmail } from '../../model/usuarioModel.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const SECRET = process.env.JWT_SECRET || 'supersecretkey';

export const loginUsuarioController = async (req, res) => {

  try {
    const { email, senha } = req.body;

    const usuario = await getByEmail(email);
    if (!usuario) return res.status(404).json({ message: 'Usuário não encontrado' });

    const senhaValida = await bcrypt.compare(senha, usuario.senha);
    if (!senhaValida) return res.status(401).json({ message: 'Senha incorreta' });

    const token = jwt.sign({ id: usuario.id, email: usuario.email, tipo: usuario.tipo }, SECRET, { expiresIn: '1h' });

    res.json({
      message: 'Login realizado com sucesso',
      id: usuario.id,
      email: usuario.email,
      tipo: usuario.tipo,
      token
    })


  } catch (error) {
    res.status(500).json({ message: 'Erro ao fazer login', error: error.message });
  }
}
