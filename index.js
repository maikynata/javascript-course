class Cliente {
    nome;
    cpf;
}

class ContaCorrente {
    agencia;
    _saldo;

    sacar(valor){
        if(this._saldo >=valor){
            this._saldo -= valor;
        }
    }
}

const cliente1 = new Cliente();
const cliente2 = new Cliente();

const contacorrenteRicardo = new ContaCorrente();
contacorrenteRicardo.saldo = 0;
contacorrenteRicardo.agencia = 1001;
console.log(contacorrenteRicardo.saldo);

cliente1.nome = "Ricardo";
cliente1.cpf = 12345678910;
cliente1.agencia = 1001;
cliente1.saldo = 0;

console.log(cliente1);
