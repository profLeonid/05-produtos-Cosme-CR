'use strict'

function adicionarProduto(){
    const lista = document.getElementById('lista')
    const produto = document.getElementById('produto')



    if (produto.value != '') {
        const span = document.createElement('span')
        span.textContent =produto.value
        span.className = "flex"
        lista.appendChild(span)
        
    }
    document.getElementById("produto").value = "";


}


