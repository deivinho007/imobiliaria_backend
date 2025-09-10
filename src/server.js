import express from 'express'
import usuarioRouter from './routers/usuarioRouter.js'
import imovelRouter from './routers/imovelRouter.js'
import favoritosRouter from './routers/favoritosRouter.js'
import agendaRouter from './routers/agendaRouter.js'
import dotenv from 'dotenv'
import cors from 'cors'

const app = express();
const port = 3000;
dotenv.config()

app.use(cors());
app.use(express.json());

app.use('/usuario', usuarioRouter)
app.use('/imovel', imovelRouter)
app.use('/favoritos', favoritosRouter)
app.use('/agenda', agendaRouter)


app.listen(port, () => {
    console.log(`Servidor Rodando na port ${port}`);
})
