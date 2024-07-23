// PascalCase camelCase snake_case UPPER-SNAKE-CASE
export class Produto {
    constructor(nome, quantidade) {
        this.id = Math.random() * (1000 - 1) + 1;
        this.nome = nome;
        this.quantidade = quantidade;
    }
}
