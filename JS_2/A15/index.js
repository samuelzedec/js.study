// Escopo é o contexto onde a variável foi declarada podendo ser
// mais externo, ou mais interno (se estiver dentro de um bloco)
// Variáveis no escopo mais externo podem ser
// usadas dentro de escopos mais internos
let pokemon = "Charmander"
function evoluir() {
  pokemon = "Charmeleon"
}
console.log(pokemon)
evoluir()
console.log(pokemon)

// Variáveis no escopo mais interno não podem ser
// usadas fora dele em escopos mais internos
function criarAnimal() {
  let animal = "Gato"
}
criarAnimal()
//console.log(animal) // Gera erro

// Apenas variáveis declaradas com var ficam
// disponíveis em um escopo mais externo
function avaliarNota(nota) {
    let situacao = ''
    if (nota > 60) {
      var aprovado = true
      situacao = "Aprovado"
    } else {
      var aprovado = false
      situacao = "Reprovado"
    }
  
    console.log(nota)
    console.log(aprovado)
    console.log(situacao) // Gera erro
  }
  avaliarNota(83)
  avaliarNota(49)
  
  // Mas mesmo o var não consegue "sair" para fora do escopo da função
  function ola() {
    var texto = "Olá, mundo!"
  }
  console.log(texto) // Gera erro