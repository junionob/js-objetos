const cliente = {
    nome: "André",
    idade: 32,
    cpf: "11223345",
    email: "André@domíno.com"
};

console.log(`
    O Cliente ${cliente.nome} tem ${cliente.idade} anos.
`);

console.log(`Os três primeiros digitos são ${cliente.cpf.substring(0, 3)}.###.###-## `)