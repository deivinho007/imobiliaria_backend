import jwt from 'jsonwebtoken';
const SECRET = process.env.JWT_SECRET || 'supersecretkey';

export const autenticar = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  if (!authHeader) return res.status(401).json({ message: 'Token não fornecido' });

  const token = authHeader.split(' ')[1]; // Bearer <token>
  if (!token) return res.status(401).json({ message: 'Token inválido' });

  try {
    const payload = jwt.verify(token, SECRET);
    req.usuario = payload;
    next();
  } catch (err) {
    res.status(403).json({ message: 'Token expirado ou inválido' });
  }
};
