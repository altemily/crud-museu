const { obras } = require("./obras");

function criarObra(id, titulo, artista, anoCriacao, dataAquisicao, localizacao, estadoConcervacao, valorEstimado) {
    const novaObra = { id, titulo, artista, anoCriacao, dataAquisicao, localizacao, estadoConcervacao, valorEstimado};

    try {
        obras.push(novaObra);
        console.log("Obra cadastrada com sucesso!");
    } catch (error) {
        console.error("Erro ao cadasttar obra.");
    }
}

module.exports = { criarObra };