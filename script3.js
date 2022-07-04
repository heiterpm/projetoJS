const botao = document.getElementById('botao')
const input = document.querySelector('input')
const div = document.getElementById('div')


botao.onclick = function(){
input.value == 'esconder' ? div.removeAttribute('hidden') : console.log('nao exibir')
}