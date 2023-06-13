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

const chavesDoObjeto = Object.keys(cliente);

console.log(chavesDoObjeto);

if(!chavesDoObjeto.includes("endereco")){
    console.error("Erro. Chave não encontrada.")
}