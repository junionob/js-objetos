const cliente = {
    nome: "João",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["6199999-8888", "6198888-2222"],
    saldo: 200,
    efetuaPagamento: function (valor) {
        if (valor > this.saldo) {
            console.log("Saldo insuficiente");
        } else {
            this.saldo -= valor;
            console.log(`Pagamento realizado. novo saldo ${this.saldo}`)
        }
    }
};

cliente.efetuaPagamento(25);
cliente.efetuaPagamento(10);
cliente.efetuaPagamento(1.3);
cliente.efetuaPagamento(1.31);
