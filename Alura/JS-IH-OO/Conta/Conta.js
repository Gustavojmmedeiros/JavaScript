//Classe Abstrata: não pode ser construída diretamente - só funciona para ser herdada

export class Conta {
    constructor(saldoInicial, cliente, agencia) {
        if(this.constructor == Conta){
            throw new Error("Você não deveria instanciar um objeto do tipo Conta diretamente, pois essa é uma classe abstrata")
        }
        this._saldo = saldoInicial
        this._cliente = cliente
        this._agencia = agencia
    }
    // this serve para falar que é dessa conta corrente (a conta corrente da qual a função está dentro) 

    set cliente(novoValor) {
        if(novoValor instanceof Cliente){
            this._cliente = novoValor
        }
    } 

    get cliente() {
        return this._cliente
    }

    get saldo() {
        return this._saldo
    }

    //Método Abstrato: é feito para ser sobrescrito
    sacar(valor) {
        throw new Error("O método Sacar da conta é abstrato ")
    }

    //dessa forma, elimina-se a duplicação de código na conta corrente, abstraiu-a para um método privado (não deve ser usado fora da classe), e define-se qual a taxa se deve sacar no método da conta corrente
    _sacar(valor, taxa) {
        const valorSacado = taxa * valor
        if(this._saldo >= valorSacado){ 
            this._saldo -= valorSacado
            return valorSacado
        }

        return 0 /* else return 0 */
    }

    depositar(valor) {
        this._saldo += valor
    }

    transferir(valor, conta) {
        const valorSacado = this.sacar(valor)
        conta.depositar(valorSacado)
    }
}