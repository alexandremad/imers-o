function pesquisar() {
    // Esta função é responsável por pesquisar dados e exibir os resultados na página.
    // Ela itera sobre um array de dados (dados), cria elementos HTML para cada dado
    // e adiciona esses elementos a uma seção com o ID "resultados-pesquisa".

    let section = document.getElementById("resultados-pesquisa");
    // Obtemos a seção HTML onde os resultados serão exibidos.

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    if (!campoPesquisa) {
        
        section.innerHTML = "<p>Menhum resultado encontrado. Digite o nome do atleta ou esporte</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

 
    let resultados = "";
    // Inicializamos uma string vazia para armazenar os resultados da pesquisa.
    let titulo = "";
    let destcicao = "";
    let tags = ";"
    // Para cada dado dentro da lista de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLocaleLowerCase()
        destcicao = dado.descricao.toLocaleLowerCase()
        tags = dado.tags.toLocaleLowerCase()

        if (titulo.includes(campoPesquisa) || destcicao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
             // Criamos um novo elemento HTML para cada resultado.
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank">Mais informações</a>
            </div>
        `;
        }
    }

    if (!resultados) {
        resultados = "<p>Menhum resultado encontrado</p>"
    }

    // Atualizamos o conteúdo HTML da seção com os resultados da pesquisa.
    section.innerHTML = resultados;
}