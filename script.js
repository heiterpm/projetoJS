var pessoa = {
    nome: 'heiter',
    idade: 18,
    peso: 25.4,
    admin: true
}
var array = [123,456, 'pedro', 'joao']
console.log(`${pessoa.nome} pesa ${pessoa.peso}`)
console.log(array)


let arrayheiter =["Item1","Item2","Item3"]
console.log(arrayheiter)
//Adiciona item no fim
arrayheiter.push("Item4")
console.log(arrayheiter)
//Aidiciona no começo
arrayheiter.unshift("Item0")
console.log(arrayheiter)
//Remover do fim
arrayheiter.pop()
console.log(arrayheiter)
//Remover do começo
arrayheiter.shift()
//Pegar somente alguns items do array
console.log(arrayheiter.slice(1,3))
//Remover 1 ou mais elementos do array
arrayheiter.splice(1,1)
console.log(arrayheiter)
//Encontrar index do array
let index = arrayheiter.indexOf(Item3)
console.log(index)