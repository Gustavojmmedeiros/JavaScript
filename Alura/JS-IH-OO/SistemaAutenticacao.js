/*
Ser autenticável significa ter o método autenticar

Método estático não precisa ser instanciado

Polimorfismo e duck typing: não interessa o tipo do objeto, mas o que ele consegue fazer - se ele tem certos métodos e propriedades. (Se anda como pato e faz quack como pato, então deve ser um pato)
*/

import { Funcionario } from "./Funcionarios/Funcionario.js"

export class SistemaAutenticacao {
    static login(autenticavel, senha) {
        if(SistemaAutenticacao.ehAutenticavel(autenticavel)) {
            return autenticavel.autenticar(senha)
        }
        return false
    }

    static ehAutenticavel(autenticavel) {
        return "autenticar" in autenticavel && autenticavel.autenticar instanceof Function
    }
}