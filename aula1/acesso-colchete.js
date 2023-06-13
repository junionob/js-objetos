const cliente = {
    nome: "André",
    idade: 32,
    cpf: "11223345",
    email: "André@domíno.com"
};

console.log(`
    O Cliente ${cliente["nome"]} tem ${cliente["idade"]} anos.
`);

const chaves = ["nome", "idade", "cpf", "email"];

chaves.forEach((chave) => {
    console.log(`A chave ${chave} tem valor ${cliente[chave]}`)
})