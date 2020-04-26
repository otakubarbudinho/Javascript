//** Trabalhando com Classes no JavaScript */

class clientes {
    constructor(nome, cpf) {

        this.nome = nome;

        this.cpf = cpf;
    }

    exibirNome() {
        console.log('O nome do cliente é' + this.nome);

    }

}

const cliente = new clientes('Rodrigo', '555.348.440-51');




console.log(cliente.exibirNome());
