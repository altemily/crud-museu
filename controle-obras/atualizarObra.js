const { obras } = require("./obras");

function atualizarObra(id, titulo, artista, anoCriacao, dataAquisicao, localizacao, estadoConcervacao, valorEstimado) {
    try {
        const obra = obras.find(f => f.id === id);

        if (obra) {
            obra.titulo = novoTitulo;
            obra.artista = novoArtista;
            obra.anoCriacao = novoAnoCriacao;
            obra.dataAquisicao = novaDataAquisicao;
            obra.localizacao = novaLocalizacao;
            obra.estadoConcervacao = novoEstadoConservacao;
            obra.valorEstimado = novoValorEstimado;
            
            console.log("Obra atualizada com sucesso!");
        } else {
            console.log("Obra não encontada.");
        }
    } catch (error) {
        console.error("Erro ao atuaizar obra.", error.message);
    }
}


module.exports = { atualizarObra };