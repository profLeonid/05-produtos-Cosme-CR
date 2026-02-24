'use strict'

function adicionarProduto(){
    const lista = document.getElementById('lista')
    const produto = document.getElementById('produto')

    const span = document.createElement('span')
    span.textContent =produto.value
    span.className = "flex"
    lista.appendChild(span)
}


