'use strict' // ativa modo estrito do JavaScript (evita alguns erros comuns)

function adicionarProduto(){

    // pega os inputs do formulário
    const produto = document.getElementById('produto')
    const valor = document.getElementById('valor')
    const quantidade = document.getElementById('quantidade')

    // seleciona o corpo da tabela onde as linhas serão adicionadas
    const tbody = document.querySelector("tbody")

    // verifica se nenhum campo está vazio
    if (produto.value != '' && valor.value != '' && quantidade.value != '') {

        // cria uma nova linha da tabela
        const tr = document.createElement('tr')

        // cria três células da tabela
        const tdNome = document.createElement('td')
        const tdValor = document.createElement('td')
        const tdQuantidade = document.createElement('td')

        // coloca os valores digitados dentro das células
        tdNome.textContent = produto.value
        tdValor.textContent = valor.value
        tdQuantidade.textContent = quantidade.value

        // adiciona classes de estilo (Tailwind)
        tdNome.className = "px-4 py-2 border"
        tdValor.className = "px-4 py-2 border"
        tdQuantidade.className = "px-4 py-2 border"

        // adiciona as células dentro da linha
        tr.appendChild(tdNome)
        tr.appendChild(tdValor)
        tr.appendChild(tdQuantidade)

        // adiciona a linha completa dentro do corpo da tabela
        tbody.appendChild(tr)
    }

    // limpa os campos do formulário após adicionar o produto
    produto.value = ""
    valor.value = ""
    quantidade.value = ""
}