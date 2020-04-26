//New, constructor, instaceof

//New
function usuario(nome) {

    this.nome = nome;
    this.log = function () {

        console.log(nome);
    }



}

const rodrigo = new usuario('rodrigo');

console.log(rodrigo)

//instanceof

console.log(rodrigo instanceof usuario)



