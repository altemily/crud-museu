const { obras } = require("./obras");
var validator = require('validator');

function criarObra(id, titulo, artista, anoCriacao, dataAquisicao, localizacao, estadoConcervacao, valorEstimado) {
    const novaObra = { id, titulo, artista, anoCriacao, dataAquisicao, localizacao, estadoConcervacao, valorEstimado};

    try {
        
        if(
            validator.isEmpty(id) ||
            validator.isEmpty(titulo) ||
            validator.isEmpty(artista) ||
            validator.isEmpty(anoCriacao) ||
            validator.isEmpty(dataAquisicao) ||
            validator.isEmpty(localizacao) ||
            validator.isEmpty(estadoConcervacao) ||
            validator.isEmpty(valorEstimado)
            
        ) {       
            console.error("Todos os campos devem ser preenchidos.")
        return
        }
        
        obras.push(novaObra);
        console.log("Obra cadastrada com sucesso!");
    } catch (error) {
        console.error("Erro ao cadasttar obra.");
    }
}

module.exports = { criarObra };