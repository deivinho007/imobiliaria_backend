import express from 'express'
import usuarioRouter from './routers/usuarioRouter.js'
import cors from 'cors'

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.use('/usuario', usuarioRouter)


app.listen(port, () => {
    console.log(`Servidor Rodando na port ${port}`);
})
