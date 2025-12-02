# 🏡 Villa Indaiá Backend

API Backend construída em Node.js para gerenciamento de sistema imobiliário.

## 📋 Sobre a API

API RESTful completa que fornece endpoints para:

- **Autenticação de usuários** com JWT e criptografia de senhas
- **Gerenciamento de imóveis** (CRUD completo com filtros e busca)
- **Sistema de contato** com envio de emails automatizado
- **Controle de acesso** com middlewares de autenticação
- **Integração com banco de dados** via Prisma ORM

## 🚀 Stack Tecnológico

- **Node.js** + **Express** - Servidor e roteamento
- **Prisma ORM** - Gerenciamento de banco de dados
- **JWT** - Autenticação stateless
- **Bcrypt** - Hash de senhas
- **Nodemailer** - Envio de emails

## 🛣️ Principais Rotas da API

### Autenticação
- `POST /api/auth/register` - Criar novo usuário
- `POST /api/auth/login` - Autenticar usuário
- `POST /api/auth/forgot-password` - Recuperar senha

### Imóveis
- `GET /api/imoveis` - Listar imóveis (com filtros por tipo, preço, cidade, etc)
- `GET /api/imoveis/:id` - Buscar imóvel específico
- `POST /api/imoveis` - Cadastrar imóvel (requer autenticação)
- `PUT /api/imoveis/:id` - Atualizar imóvel (requer autenticação)
- `DELETE /api/imoveis/:id` - Remover imóvel (requer autenticação)

### Contato
- `POST /api/contato` - Enviar mensagem de contato

## 🔐 Recursos de Segurança

- Tokens JWT para autenticação stateless
- Senhas criptografadas com Bcrypt
- Middlewares de validação e autorização
- Proteção de rotas administrativas

## 📦 Instalação Rápida

```bash
git clone https://github.com/deivinho007/imobiliaria_backend.git
cd imobiliaria_backend
npm install
npx prisma migrate dev
npm run dev
```

## 👨‍💻 Autor

Desenvolvido por **Deivinho007**
