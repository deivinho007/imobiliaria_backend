import express from 'express'
import usuarioRouter from './routers/usuarioRouter.js'
import imovelRouter from './routers/imovelRouter.js'
import favoritosRouter from './routers/favoritosRouter.js'
import agendaRouter from './routers/agendaRouter.js'
import dotenv from 'dotenv'
import cors from 'cors'

const app = express();
const port = 3100;
dotenv.config()

app.use(cors());
app.use(express.json());
// Adicione isso depois do app.use(express.json()):
app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
    console.log('Body:', req.body);
    next();
});

app.use('/usuario', usuarioRouter)
app.use('/imoveis', imovelRouter)
app.use('/favoritos', favoritosRouter)
app.use('/agenda', agendaRouter)


app.listen(port, () => {
    console.log(`Servidor Rodando na port ${port}`);
})
