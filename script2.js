const botao = document.querySelector('button')
const input = document.querySelector('input')
const titulo = document.querySelector('h1')
const paragrafo = document.createElement('div')
const body = document.querySelector('body')

console.log(botao)
botao.textContent = 'Enviar'
botao.setAttribute('onclick', 'alerta()')

console.log(input)
input.value = 'Numero grande'

input.setAttribute('disabled',true)
titulo.style.color = 'blue'

paragrafo.innerText = 'Oi eu sou um valor'
body.append(paragrafo)

function alerta(){
    alert('clico no botao cara bobo')
}
