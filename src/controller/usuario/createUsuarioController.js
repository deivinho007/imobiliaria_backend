import { create } from '../../model/usuarioModel.js'

export const createUsuarioController = async (req, res) => {

    try {
        const usuario = req.body;
        const result = await create(usuario);

        res.status(201).json({
            menssage: 'Usuário criado com sucesso',
            usuario: result
        });
    } catch (error) {
        res.status(500).json({
            menssage: 'Erro ao criar usuário',
            error: error.message
        })
    }
}