function addText() {
    const textoDigitado = document.querySelector('#texto').value
    const divisao = document.querySelector('.receberTextos')
    divisao.innerHTML += `<p>${textoDigitado}</p>`
}