let dinheiroInicial = parseFloat(prompt('Qual o valor incial disponível:'))
let maisOuMenos
let escolha = 0

do {
    escolha= parseFloat(prompt(
        'Valor Inicial: ' + dinheiroInicial +
        '\n\nEscolha uma opção: ' +
        '\n1 - Adicionar mais dinheiro' +
        '\n2 - Retirar mais dinheiro' +
        '\n3 - Sair'
    ))

    switch(escolha) {
        case 1: 
            maisOuMenos = parseFloat(prompt('Qual valor deseja adicionar:'))
            dinheiroInicial += maisOuMenos
            break
        case 2: 
            maisOuMenos = parseFloat(prompt('Qual valor deseja retirar'))
            dinheiroInicial -= maisOuMenos
            break
        case 3:
            alert('Programa Encerrado!')
            break
        default:
            alert('Opção Indisponível...')
    }
} while(escolha !== 3)