export class ContaPoupanca {
    constructor(saldoInicial, cliente, agencia) {
        this._saldo = saldoInicial
        this._cliente = cliente
        this._agencia = agencia
    }

    sacar(valor) {
        if(this._saldo >= valor){ 
            this._saldo -= valor
            return valor
        }/* o this serve para falar que é dessa conta corrente (a conta corrente da qual a função está dentro) */
    }

    depositar(valor) {
        if(valor <= 0) {
            return
        }

        this._saldo += valor
    }

    transferir(valor, conta) {
        const valorSacado = this.sacar(valor)
        conta.depositar(valorSacado)
    }
}