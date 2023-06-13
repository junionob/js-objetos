const objPersonagem = {
    nome: "Gandolf", 
    classe: "mago",
    nivel: "20"
}

const objPersonagem2 = Object.create(objPersonagem);

objPersonagem2.nome = "Gandolf, o Cinzento";

console.log(objPersonagem);
console.log(objPersonagem2);