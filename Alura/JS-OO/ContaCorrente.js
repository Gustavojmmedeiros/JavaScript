export class ContaCorrente {
    agencia
    _saldo = 0

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
}