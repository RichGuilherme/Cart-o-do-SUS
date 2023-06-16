export function validaCPF(cpfFormatado) {

    const cpf = limpaFormatacao(cpfFormatado)
    
    if (cpf.length !== 11) {
        return false
    } 
    
    if (verificarDigitosRepetidos(cpf)) {
        return false
    }
    
    
    const digito1 = calcularDigitoVerificador(cpf, 1)
    const digito2 = calcularDigitoVerificador(cpf, 2)

    if (digito1 && digito2) {
        return true
    } else {
        return false
    }
    
}


function limpaFormatacao(cpf) {
    cpf = cpf.replace(/\D/g, '')
    return cpf
}

function verificarDigitosRepetidos(cpf) {
    return cpf.split('').every((d) => d === cpf[0]);
}

function calcularDigitoVerificador(cpf, posicao) {
    const sequencia = cpf.slice(0, 8 + posicao).split('')

    let soma = 0
    let multiplicador = 9 + posicao

    for (const numero of sequencia) {
        soma += multiplicador * Number(numero)
        multiplicador--
    }

    const restoDivisao = (soma * 10) % 11
    const digito = cpf.slice(8 + posicao, 9 + posicao)

    return restoDivisao == digito
}
