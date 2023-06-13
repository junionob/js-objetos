const cliente = {
    nome: "João",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["6199999-8888", "6198888-2222"],
};

cliente.endereco = [
    { 
        rua: "R. Joseph Climber",
        numero: 1337,
        apartamento: true,
        complemento: "AP 945",
    },
];

for (let chave in cliente) {
    let tipo = typeof cliente[chave];
    if (tipo !== 'object' && tipo !== 'function') {
        console.log(`A chave ${chave} tem valor ${cliente[chave]}`)
    }
}