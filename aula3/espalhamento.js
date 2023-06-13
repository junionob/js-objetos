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

function ligarParaCliente(telefoneComercial, telefoneResidencial){
    console.log(`Ligando para cliente ${telefoneComercial}`);
    console.log(`Ligando para cliente ${telefoneResidencial}`);
}

ligarParaCliente(...cliente.telefone)

const encomenda = {
    destinatario: cliente.nome,
    ...cliente.endereco[0]
}

console.log(encomenda);