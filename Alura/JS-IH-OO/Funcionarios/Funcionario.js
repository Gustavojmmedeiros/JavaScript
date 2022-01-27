export class Funcionario {
    constructor(nome, salario, _cpf){
        this._nome = nome
        this._salario = salario
        this._cpf = _cpf
        
        this._bonificacao = 1
        this._senha
    }

    autenticar(senha) {
        return senha == this._senha
    }

    cadastrarSenha(senha) {
        this._senha = senha
    }
}