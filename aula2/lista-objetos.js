const cliente = {
    nome: "João",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["6199999-8888", "6198888-2222"],
};

cliente.endereco = [{ 
    rua: "R. Joseph Climber",
    numero: 1337,
    apartamento: true,
    complemento: "AP 945",
}];

cliente.endereco.push({
    rua: "R. Joseph Ladder",
    numero: 404,
    apartamento: false
});

const listaApartamento = cliente.endereco.filter(
    (endereco) => endereco.apartamento === true
);
console.log(listaApartamento)