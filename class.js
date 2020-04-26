//** Trabalhando com Classes no JavaScript */
class pedidos {
    constructor(qtd) {
        this.qtd = qtd;
    }
    quantidadePedidos() {
        console.log('Total de ' + this.qtd + ' pedidos')
    }
}
class clientes extends pedidos {
    constructor(nome, cpf, qtd) {
        super(qtd);
        this.nome = nome;
        this.cpf = cpf;
    }
    exibirNome() {
        console.log('O nome do cliente é' + this.nome);
    }
}
const cliente = new clientes('Rodrigo', '555.348.440-51', '100');
cliente.exibirNome();
cliente.quantidadePedidos();
