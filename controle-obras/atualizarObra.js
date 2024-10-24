const { obras } = require("./obras");
var validator = require('validator');


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

            validator.isEmpty(id) ||
            validator.isEmpty(novoTitulo) ||
            validator.isEmpty(novoArtista) ||
            validator.isEmpty(novoAnoCriacao) ||
            validator.isEmpty(novaDataAquisicao) ||
            validator.isEmpty(novaLocalizacaoocalizacao) ||
            validator.isEmpty(novoEstadoConservacao) ||
            validator.isEmpty(novovalorEstimado)

            console.log(validator.isDate(data,{format:"DD/MM/YYYY"}))
            console.log("Obra atualizada com sucesso!");
        } else {
            console.log("Obra não encontada.");
        }
    } catch (error) {
        console.error("Erro ao atuaizar obra.", error.message);
    }
}


module.exports = { atualizarObra };