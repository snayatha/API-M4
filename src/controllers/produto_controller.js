
import { Produto } from "../models/produto_model.js"

let listProduto = [];
// let listProduto = Array.from({ length: 100 }, (value, index) => ({ idade: index + 1 }));

export const createProduto = (nome, quantidade) => { 
    const newProduto = new Produto(nome, quantidade);
    listProduto.push(newProduto);
    return newProduto; 
}

export const getAllProdutos = () => {
    return listProduto;
}

export const getByNomeProduto = (nome) => {
    const productAlreadyExist = listProduto.find(produto => produto.nome == nome);

    if(productAlreadyExist){
        let indexProduto = listProduto.findIndex(produto => produto.id == id);
        listProduto[indexPeople].nome = nome;
        return listProduto[indexProduto];
    }else{
        return "Produto não adicionado na lista"
    }
}

export const getByIdProduto = (id) => {
    const productAlreadyExist = listProduto.find(produto => produto.id ==id);

    if(productAlreadyExist){
        let indexProduto = listProduto.findIndex(produto => produto.id == id);
      
        return listProduto[indexProduto];
    }else{
        return "Produto não adicionado na lista"
    }

}
export const getByQuantidadeProduto = (quantidade) => {
    const productAlreadyExist = listProduto.find(produto => produto.quantidade == quantidade);

    if(productAlreadyExist){
        let indexProduto = listProduto.findIndex(produto => produto.quantidade == quantidade);

        return listProduto[indexProduto];
    }else{
        return "Produto não adicionado na lista"
    }
}

export const updateProduto = (id, nome) => {

    const productAlreadyExist = listProduto.find(produto => produto.id ==id);

    if(productAlreadyExist){
        let indexProduto = listProduto.findIndex(produto => produto.id == id);
        listProduto[indexPeople].nome = nome;
        return listProduto[indexProduto];
    }else{
        return "Produto não adicionado na lista"
    }
}

export const deleteProduto = (id) => {
    const productAlreadyExist = listProduto.find(produto => produto.id == id); // 

    // const produto = {
    //     id: 1,
    //     nome: "Pamonha"
    // }

    if(productAlreadyExist){
        let indexProduto = listProduto.findIndex(produto => produto.id == id) // retorna -1 ou o index do valor encontrado

        listProduto.splice(indexProduto, 1)
        
        return "Ok!"; // true ou falso
    }else{
        return "Não existe produto com essa identificação"
    }
}
