import { getAllProdutos, createProduto, deleteProduto, updateProduto, getByNomeProduto } from '../controllers/produto_controller.js'
import { Router } from 'express';

const produtoRouter = Router()

produtoRouter.get("/produto", (req, res) => {
    const listProduto = getAllProdutos();
    
    res.status(200).json({ produtos: listProduto });
});

produtoRouter.get("/produto/:nome", (req, res) => {
    
    const { nome } = req.params;
    const listProduto = getByNomeProduto(nome);
    
    res.status(200).json({ produtos: listProduto });
});

produtoRouter.get("/produto/:id", (req, res) => {
    const { id } = req.params;
    const listProduto = getAllProdutos();
    
    res.status(200).json({ produtos: listProduto });
});

produtoRouter.get("/produto/:quantidade", (req, res) => {
    const { quantidade } = req.params;
    const listProduto = getAllProdutos();
    
    res.status(200).json({ produtos: listProduto });
});

produtoRouter.post("/produto/criar/:qtd/:nome", (req, res) => {
    const { qtd, nome } = req.params;

    const produto = createProduto(nome, qtd);

    res.status(200).json({ produto });
});

produtoRouter.put("/produto/atualizar/:id/:name", (req, res) => {
    const { id, name } = req.params;
    
    const listProduto = updateProduto(id, name);
    
    res.status(200).json({ message: "Produto atualizado com sucesso!" });
});

produtoRouter.delete("/produto/:id", (req, res) => {
    const { id } = req.params;
    
    const listProduto = deleteProduto(id);
    
    res.status(200).json({listProduto});
});

// produto1
// produto2
// produto/2
// produto/1
// produto/1

export { produtoRouter }